export class Curtains {
    bgWidth :number;
    bgHeight :number;
    region :{x :number, y :number};
    mousePos :{x :number, y :number};
    color :string;

    constructor(ctx :CanvasRenderingContext2D, bgWidth :number, bgHeight :number, color: string) {
        this.bgWidth = bgWidth;
        this.bgHeight = bgHeight;
        this.mousePos = {x: bgWidth/2, y:bgHeight/2};
        this.region = {x: bgWidth - this.mousePos.x, y: bgHeight};
        this.color = color;

        ctx.canvas.addEventListener('mousemove', this.updateStatus.bind(this));
    }

    updateStatus(e :MouseEvent) {
        this.mousePos = {x: e.offsetX, y: e.offsetY};
        this.region = {x: this.bgWidth - this.mousePos.x, y: this.bgHeight};
    }

    draw(ctx :CanvasRenderingContext2D, textColor :string) {
        const textMarginLeft :number = 65;
        const curtainPos :number = this.mousePos.x;
        // Background color
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillRect(this.mousePos.x, 0, this.region.x, this.region.y);
        ctx.globalCompositeOperation = 'xor';
        // Text color
        ctx.fillStyle = textColor;
        ctx.font = `bold 16px Arial`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText('< developer >', curtainPos + textMarginLeft, this.bgHeight / 2);
    }
    
    // clear() {
    //     if (!this.ctx) return;
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }    
}