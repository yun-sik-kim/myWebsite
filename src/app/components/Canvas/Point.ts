export class Point {
    // private i: number;
    private _x: number;
    private _y: number;

    private ySurfaceLevel: number;
    private maxAmplitude: number;

    private current: number;
    private speed: number;
    
    // constructor(i: number, x: number, y: number) {
    constructor(x: number, y: number) {
        // this.i = i;
        this._x = x;
        this._y = y;

        this.ySurfaceLevel = y;
        this.maxAmplitude = Math.random() * 30 + 0;    //Math.random() * x + y;    x:individual discripency y:overall movement

        this.current = 0;
        this.speed = 0.03;
    }
    
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    update() {
        this.current += this.speed;
        this._y = this.ySurfaceLevel + (Math.sin(this.current) * this.maxAmplitude);
    }
}