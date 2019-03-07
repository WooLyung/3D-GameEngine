class GameObject {
    constructor(polygons, pos) {
        this.polygons = [];
        this.pos = undefined;

        this.init(polygons, pos);
    }

    init(polygons, pos) {
        this.polygons = polygons;
        this.pos = pos;
    }

    update() {

    }
}