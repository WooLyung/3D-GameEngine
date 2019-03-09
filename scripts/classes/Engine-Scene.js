class Scene {
    constructor(camera) {
        this.objects = [];
        this.lights = [];
        this.camera = undefined;

        this.init(camera);
    }

    init(camera) {
        this.camera = camera;
    }

    update() {
        angle.x += editX * engine.time.deltaTime;
        if (editX >= 0 && angle.x >= 10) editX *= -1;
        else if (editX <= 0 && angle.x <= 0) editX *= -1;
        angle.y += editY * engine.time.deltaTime;
        if (editY >= 0 && angle.y >= 10) editY *= -1;
        else if (editY <= 0 && angle.y <= 0) editY *= -1;
        angle.z += editZ * engine.time.deltaTime;
        if (editZ >= 0 && angle.z >= 10) editZ *= -1;
        else if (editZ <= 0 && angle.z <= 0) editZ *= -1;
        speed += editSpeed * engine.time.deltaTime;
        if (editSpeed >= 0 && speed >= 3.5) editSpeed *= -1;
        else if (editSpeed <= 0 && speed <= -3.5) editSpeed *= -1;

        this.objects.forEach(element => {
            element.update();
        });
        this.lights.forEach(element => {
            element.update();
        });
    }
}