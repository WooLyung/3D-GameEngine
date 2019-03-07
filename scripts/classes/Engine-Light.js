class Light {
    constructor(type, color) {
        this.type = undefined;
        this.color = undefined;

        if (type == 'point') {
            this.pos = arguments[2];
            this.distance = arguments[3];
        }
        if (type == 'direct') {
            this.vector = arguments[2];
        }

        this.init(type, color);
    }

    init(type, color) {
        this.type = type;
        this.color = color;
    }

    update() {
        
    }
}