var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

class Engine {
    constructor() {
        this.renderer = undefined;
        this.time = undefined;
        this.nowScene = undefined;

        this.init();
    }

    init() {
        this.renderer = new Renderer();
        this.time = new Time();
    }

    start() {
        setInterval(()=>this.loop(), 1);
    }

    loop() {
        this.update();
        this.render();
    }

    update() {
        this.time.update();
        this.nowScene.update();
    }

    render() {
        this.renderer.render(this.nowScene.objects, this.nowScene.lights, this.nowScene.camera);
    }
}

var engine = new Engine();
engine.nowScene = new Scene({
    pos:{x:0, y:-600, z:0},
    angle:{x:0, y:0, z:0}
});

var pols = [];
var pols2 = [];
var pols3 = [];
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        for (let k = 0; k < 7; k++) {
            if ((i == 0 || i == 6) && (j == 0 || j == 6) || (i == 0 || i == 6) && (k == 0 || k == 6) || (k == 0 || k == 6) && (j == 0 || j == 6)) {
                pols.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols.push(new Polygon([
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols.push(new Polygon([
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
    
                pols2.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols2.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols2.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols2.push(new Polygon([
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols2.push(new Polygon([
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols2.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));

                pols3.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols3.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols3.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols3.push(new Polygon([
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols3.push(new Polygon([
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:-20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
                pols3.push(new Polygon([
                    {x:-20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:-20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:20 + 50 * j - 150, z:20 + 50 * k - 150},
                    {x:20 + 50 * i - 150, y:-20 + 50 * j - 150, z:20 + 50 * k - 150}
                ], {r:255, g:255, b:255, a:255}));
            }
        }
    }
}
engine.nowScene.objects.push(
    new GameObject(pols, {x:0, y:0, z:0})
);
engine.nowScene.objects.push(
    new GameObject(pols2, {x:0, y:0, z:0})
);
engine.nowScene.objects.push(
    new GameObject(pols3, {x:0, y:0, z:0})
);

engine.nowScene.lights.push(new Light('point', {r:0, g:0, b:255}, {x:0, y:-350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:0}, {x:0, y:-350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:0}, {x:0, y:-350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:0, b:255}, {x:0, y:350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:0}, {x:0, y:350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:0}, {x:0, y:350, z:0}, 160));

engine.nowScene.lights.push(new Light('point', {r:255, g:127, b:0}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:127}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:127}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:127, b:0}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:127}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:127}, {x:-350, y:0, z:0}, 160));

engine.nowScene.lights.push(new Light('point', {r:127, g:255, b:0}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:127, g:0, b:255}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:127, b:255}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:127, g:255, b:0}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:127, g:0, b:255}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:127, b:255}, {x:-350, y:0, z:0}, 160));

engine.nowScene.lights.push(new Light('point', {r:0, g:0, b:255}, {x:0, y:-350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:0}, {x:0, y:-350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:0}, {x:0, y:-350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:0, b:255}, {x:0, y:350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:0}, {x:0, y:350, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:0}, {x:0, y:350, z:0}, 160));

engine.nowScene.lights.push(new Light('point', {r:255, g:127, b:0}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:127}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:127}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:127, b:0}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:127}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:127}, {x:-350, y:0, z:0}, 160));

engine.nowScene.lights.push(new Light('point', {r:127, g:255, b:0}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:127, g:0, b:255}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:127, b:255}, {x:350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:127, g:255, b:0}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:127, g:0, b:255}, {x:-350, y:0, z:0}, 160));
engine.nowScene.lights.push(new Light('point', {r:0, g:127, b:255}, {x:-350, y:0, z:0}, 160));

engine.nowScene.lights.push(new Light('direct', {r:126, g:0, b:0}, {x:0, y:-1, z:0}));
engine.nowScene.lights.push(new Light('direct', {r:10, g:126, b:0}, {x:0, y:1, z:0}));
engine.nowScene.lights.push(new Light('direct', {r:0, g:0, b:126}, {x:1, y:0, z:0}));
engine.nowScene.lights.push(new Light('direct', {r:0, g:126, b:126}, {x:-1, y:0, z:0}));
engine.nowScene.lights.push(new Light('direct', {r:126, g:0, b:126}, {x:0, y:0, z:1}));
engine.nowScene.lights.push(new Light('direct', {r:126, g:126, b:0}, {x:0, y:0, z:-1}));

engine.nowScene.objects[0].polygons.forEach((element1, index1) => {
    element1.point.forEach((element2, index2) => {
        engine.nowScene.objects[0].polygons[index1].point[index2] = matrixMul(engine.nowScene.objects[0].polygons[index1].point[index2], getRotationMatrix({x:0, y:1, z:0}, Math.PI / 4));
    });
});
engine.nowScene.objects[1].polygons.forEach((element1, index1) => {
    element1.point.forEach((element2, index2) => {
        engine.nowScene.objects[1].polygons[index1].point[index2] = matrixMul(engine.nowScene.objects[1].polygons[index1].point[index2], getRotationMatrix({x:0, y:0, z:1}, Math.PI / 4));
    });
});
engine.nowScene.objects[2].polygons.forEach((element1, index1) => {
    element1.point.forEach((element2, index2) => {
        engine.nowScene.objects[2].polygons[index1].point[index2] = matrixMul(engine.nowScene.objects[2].polygons[index1].point[index2], getRotationMatrix({x:1, y:0, z:0}, Math.PI / 4));
    });
});

var angle = {x:8, y:3, z:6};
var editX = -3.5;
var editY = 5.5;
var editZ = 2;
var speed = 1.5;
var editSpeed = -1.5;

engine.nowScene.objects[0].update = function() {
    this.polygons.forEach((element1, index1) => {
        element1.point.forEach((element2, index2) => {
            this.polygons[index1].point[index2] =  matrixMul(this.polygons[index1].point[index2], getRotationMatrix(angle, engine.time.deltaTime * speed));
        });
    });
}
engine.nowScene.objects[1].update = engine.nowScene.objects[0].update;
engine.nowScene.objects[2].update = engine.nowScene.objects[0].update;

engine.nowScene.lights[0].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:0}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[1].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[2].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[3].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:0}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[4].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[5].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[6].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[7].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:1}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[8].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[9].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[10].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:1}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[11].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[12].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[13].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:0}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[14].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:1}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[15].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[16].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:0}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[17].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:1}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[18].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:0}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[19].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:1}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[20].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[21].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:0}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[22].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:1}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[23].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.8))};
engine.nowScene.lights[24].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[25].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[26].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[27].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[28].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[29].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[30].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[31].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:0}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[32].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:1}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[33].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[34].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:0}, engine.time.deltaTime * 1.6))};
engine.nowScene.lights[35].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:1}, engine.time.deltaTime * 1.6))};

engine.start();