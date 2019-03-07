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
    pos:{x:0, y:-300, z:0},
    angle:{x:0, y:0, z:0}
});
engine.nowScene.objects.push(
    new GameObject(
        [
            new Polygon([
                {x:-50, y:-50, z:-50},
                {x:-50, y:50, z:-50},
                {x:50, y:50, z:-50},
                {x:50, y:-50, z:-50}
            ], {r:255, g:255, b:255, a:255}),
            new Polygon([
                {x:-50, y:50, z:50},
                {x:-50, y:50, z:-50},
                {x:50, y:50, z:-50},
                {x:50, y:50, z:50}
            ], {r:255, g:255, b:255, a:255}),
            new Polygon([
                {x:-50, y:50, z:50},
                {x:-50, y:50, z:-50},
                {x:-50, y:-50, z:-50},
                {x:-50, y:-50, z:50}
            ], {r:255, g:255, b:255, a:255}),
            new Polygon([
                {x:50, y:-50, z:50},
                {x:50, y:-50, z:-50},
                {x:50, y:50, z:-50},
                {x:50, y:50, z:50}
            ], {r:255, g:255, b:255, a:255}),
            new Polygon([
                {x:50, y:-50, z:50},
                {x:50, y:-50, z:-50},
                {x:-50, y:-50, z:-50},
                {x:-50, y:-50, z:50}
            ], {r:255, g:255, b:255, a:255}),
            new Polygon([
                {x:-50, y:-50, z:50},
                {x:-50, y:50, z:50},
                {x:50, y:50, z:50},
                {x:50, y:-50, z:50}
            ], {r:255, g:255, b:255, a:255})
        ],
        {x:0, y:0, z:0}
    )
);
engine.nowScene.lights.push(new Light('point', {r:0, g:0, b:255}, {x:0, y:-150, z:0}, 500));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:255}, {x:0, y:150, z:0}, 500));
engine.nowScene.lights.push(new Light('point', {r:0, g:255, b:0}, {x:150, y:0, z:0}, 500));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:0}, {x:-150, y:0, z:0}, 500));
engine.nowScene.lights.push(new Light('point', {r:255, g:0, b:255}, {x:0, y:0, z:150}, 500));
engine.nowScene.lights.push(new Light('point', {r:255, g:255, b:0}, {x:0, y:0, z:-150}, 500));

engine.nowScene.objects[0].update = function() {
    this.polygons.forEach((element1, index1) => {
        element1.point.forEach((element2, index2) => {
            this.polygons[index1].point[index2] =  matrixMul(this.polygons[index1].point[index2], getRotationMatrix({x:1, y:1, z:0}, engine.time.deltaTime * 2.5));
        });
    });
}

engine.nowScene.lights[0].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:0}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[1].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:0, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[2].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:0}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[3].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:1, z:0}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[4].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:0, y:1, z:1}, engine.time.deltaTime * 1.4))};
engine.nowScene.lights[5].update = function() {this.pos = matrixMul(this.pos, getRotationMatrix({x:1, y:0, z:1}, engine.time.deltaTime * 1.4))};

engine.start();