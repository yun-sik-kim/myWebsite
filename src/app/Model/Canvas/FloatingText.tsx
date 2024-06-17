export class FloatingText {
    bgWidth :number;
    bgHeight :number;
    text :string;
    textWidth :number; textHeight :number;
    textHalfX :number; textHalfY :number;
    x :number; y :number;
    vx :number; vy :number;
    color :string;

    constructor(bgWidth :number, bgHeight :number, text :string, px :number, speed :number, color :string) {
        this.bgWidth = bgWidth;
        this.bgHeight = bgHeight;
        this.text = text;
        this.textHeight = px;
        this.textWidth = this.textHeight * text.length * 0.5;
        
        this.textHalfX = this.textWidth / 2;
        this.textHalfY = px / 2;
        
        this.color = color;

        this.x = this.bgWidth / 2 + ( Math.random() * 100 ) * ( (Math.random()>0.5)? 1 : -1 );
        this.y = this.bgHeight / 2 + ( Math.random() * 100 ) * ( (Math.random()>0.5)? 1 : -1 );;
        
        this.vx = speed * ( (Math.random()>0.5)? 1 : -1 );
        this.vy = speed * ( (Math.random()>0.5)? 1 : -1 );
    }
    
    draw(ctx :CanvasRenderingContext2D) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(this.bgWidth, this.bgHeight);

        ctx.fillStyle = this.color;
        // ctx.beginPath();
        ctx.font = `bold ${this.textHeight}px Arial`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        ctx.fillText(this.text, this.x, this.y);
    }

    bounceWindow(bgWidth :number, bgHeight :number) {
        const minX = this.textHalfX;
        const maxX = bgWidth - this.textHalfX;
        const minY = this.textHalfY;
        const maxY = bgHeight - this.textHalfY / 2;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }
}