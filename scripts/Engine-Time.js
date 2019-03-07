class Time {
    constructor() {
        this.deltaTime = undefined;
        this.leftTime = undefined;

        this.init();
    }

    init() {
        this.deltaTime = 0;
        this.leftTime = new Date().getTime();
    }

    update() {
        this.deltaTime = (new Date().getTime() - this.leftTime) / 1000;
        this.leftTime = new Date().getTime();
    }
}