class Renderer {
    render(objects, lights, cam) {
        // 캔버스 초기화
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);    

        // 오브젝트들의 좌표를 카메라의 각도, 위치에 따라 조정한 후 원근 투시를 적용
        let rotatedObjects = [];
        objects.forEach(element1 => {
            element1.polygons.forEach(element2 => {
                let polygon = {
                    point:[],
                    color:Renderer.lightCalc(element2.color, lights, element1.pos, element2.point),
                    type:'polygon'
                };
                let tooClose = false;

                element2.point.forEach(element3 => {
                    
                    let point = matrixMul(vectorSub(vectorAdd(element3, element1.pos), cam.pos), getRotationMatrix('xyz', cam.angle.x, cam.angle.y, cam.angle.z));
                    point.x /= point.y / 500;
                    point.z /= point.y / 500;
                    polygon.point.push(point);

                    if (point.y == 0) tooClose = true; 
                });

                if (tooClose == false) rotatedObjects.push(polygon);
            });
        });
        lights.forEach(element => {
            if (element.type == 'point') {
                let pos = matrixMul(vectorSub(element.pos, cam.pos), getRotationMatrix('xyz', cam.angle.x, cam.angle.y, cam.angle.z));
                pos.x /= pos.y / 500;
                pos.z /= pos.y / 500;

                let circle = {
                    pos,
                    color:element.color,
                    type:'light'
                };

                rotatedObjects.push(circle);
            }
        });

        // 오브젝트들을 먼 순서대로 재정렬
        rotatedObjects.sort((a, b) => {
            var averageA = 0;
            var averageB = 0;

            if (a.type == 'polygon') {
                a.point.forEach(element => {
                    averageA += element.y;
                });
                averageA /= a.point.length;
            }
            else if (a.type == 'light') {
                averageA = a.pos.y;
            }
            if (b.type == 'polygon') {
                b.point.forEach(element => {
                    averageB += element.y;
                });
                averageB /= b.point.length;
            }
            else if (b.type == 'light') {
                averageB = b.pos.y;
            }

            return averageB - averageA;
        });

        // 오브젝트들을 중앙 정렬 후 렌더링
        rotatedObjects.forEach((element1, index1) => {
            if (element1.type == 'polygon') {
                element1.point.forEach((element2, index2) => {
                    rotatedObjects[index1].point[index2].z *= -1;
    
                    rotatedObjects[index1].point[index2].x += canvas.width / 2;
                    rotatedObjects[index1].point[index2].z += canvas.height / 2;
                });

                ctx.fillStyle = `rgba(${element1.color.r},${element1.color.g},${element1.color.b},${element1.color.a})`;
                ctx.beginPath();
                ctx.moveTo(element1.point[0].x, element1.point[0].z);
                element1.point.forEach(element2 => {
                    ctx.lineTo(element2.x, element2.z);
                });
                ctx.lineTo(element1.point[0].x, element1.point[0].z);
                ctx.fill();
            }
            else if (element1.type == 'light') {
                ctx.beginPath();
                ctx.fillStyle = `rgb(${element1.color.r},${element1.color.g},${element1.color.b})`;
                ctx.arc(element1.pos.x + canvas.width / 2, element1.pos.z + canvas.height / 2, 2300 / element1.pos.y, 0, 2 * Math.PI);
                ctx.fill();
            }
        });
    }

    static lightCalc(color, lights, center, points) {
        var normalVector, center2 = {x:0, y:0, z:0}, nowColor = {r:0, g:0, b:0};

        points.forEach(element => {
            center2 = vectorAdd(center2, element);
        });
        center2.x /= points.length;
        center2.y /= points.length;
        center2.z /= points.length;

        if (vectorScaleSq(vectorSub(vectorSub(center, center2), crossProduct(vectorSub(points[0], points[2]), vectorSub(points[0], points[1]))))
            >= vectorScaleSq(vectorSub(vectorSub(center, center2), crossProduct(vectorSub(points[0], points[1]), vectorSub(points[0], points[2]))))) {
            normalVector = crossProduct(vectorSub(points[0], points[2]), vectorSub(points[0], points[1]));
        } else {
            normalVector = crossProduct(vectorSub(points[0], points[1]), vectorSub(points[0], points[2]));
        }

        lights.forEach(element => {
            if (element.type == 'direct') {
                var angle = Math.acos(innerProduct(toUnitVector(normalVector), toUnitVector(element.vector)));
                var cos = Math.cos(angle);
                if (angle <= 1000) {
                    nowColor.r += cos * element.color.r;
                    nowColor.g += cos * element.color.g;
                    nowColor.b += cos * element.color.b;
                }
            }
        });

        return {
            r:color.r * nowColor.r / 255,
            g:color.g * nowColor.g / 255,
            b:color.b * nowColor.b / 255,
            a:color.a
        };
    }
}