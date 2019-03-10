class Time {
    constructor() {
        this.deltaTime = undefined;
        this.leftTime = undefined;
        this.averageFrame = undefined;
        this.frameCount = undefined;

        this.init();
    }

    init() {
        this.deltaTime = 0;
        this.leftTime = new Date().getTime();
        this.averageFrame = 0;
        this.frameCount = 0;
    }

    update() {
        this.deltaTime = (new Date().getTime() - this.leftTime) / 1000;
        this.leftTime = new Date().getTime();

        this.frameCount++;
        this.averageFrame += 1/this.deltaTime;
        document.getElementById("frame").innerHTML = `프레임 : ${Math.round(1/this.deltaTime * 100) / 100}`;
        document.getElementById("averageFrame").innerHTML = `평균 프레임 : ${Math.round(this.averageFrame / this.frameCount * 100) / 100}`;
    }
}