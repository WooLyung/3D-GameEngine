class Camera {
    constructor(pos, angle) {
        this.pos = undefined;
        this.angle = undefined;

        this.init(pos, angle);
    }

    init(pos, angle) {
        this.pos = pos;
        this.angle = angle;
    }
}