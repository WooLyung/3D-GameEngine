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
        this.objects.forEach(element => {
            element.update();
        });
    }
}