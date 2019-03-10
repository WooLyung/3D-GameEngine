class GameObject {
    constructor(polygons, pos, angle) {
        this.polygons = [];
        this.pos = undefined;
        this.angle = undefined;

        this.init(polygons, pos, angle);
    }

    init(polygons, pos, angle) {
        this.polygons = polygons;
        this.pos = pos;
        this.angle = angle;
    }

    update() {

    }
}