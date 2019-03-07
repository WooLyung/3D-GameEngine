class Polygon {
    constructor(point, color) {
        this.point = [];
        this.color = undefined;

        this.init(point, color);
    }

    init(point, color) {
        this.point = point;
        this.color = color;
    }
}