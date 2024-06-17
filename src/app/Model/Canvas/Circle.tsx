export class Circle {
    x :number; y :number;
    r :number;
    vr :number;
    maxR :number;
    color :string;

    constructor(mouseX :number, mouseY :number, bgWidth :number, speed: number) {
        this.x = mouseX;
        this.y = mouseY;
        this.r = 0;
        this.vr = speed;
        this.maxR = bgWidth;
        this.color = 'blue';
    }

    draw(ctx :CanvasRenderingContext2D, color :string) {
        this.r += this.vr;

        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
}