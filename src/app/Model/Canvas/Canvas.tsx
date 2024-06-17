import { FloatingText } from "./FloatingText";
import { Curtains } from "./Curtains";
import { Circle } from "./Circle";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    bgWidth: number;
    bgHeight: number;
    scale: number;
    texts: FloatingText[];
    curtains: Curtains;
    circle: Circle;
    isClicked: boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        if (this.ctx === null) return;

        this.bgWidth = document.documentElement.clientWidth;
        this.bgHeight = document.documentElement.clientHeight;
        this.scale = (window.devicePixelRatio > 1)? 2 : 1;

        this.isClicked = false;

        window.addEventListener('resize', this.resize.bind(this), false);
        window.addEventListener('click', this.nextPage.bind(this));
        this.resize();

        this.texts = [
            new FloatingText(this.bgWidth, this.bgHeight, 'blog', 300, 1, 'rgba(0, 0, 255, 1)'),
            new FloatingText(this.bgWidth, this.bgHeight, 'portfolio', 300, 1,'rgba(0, 0, 255, 1)'),
            // new FloatingText(this.bgWidth, this.bgHeight, 'Yunsik', 64, 1, 'rgba(0, 0, 255, 1)'),
            // new FloatingText(this.bgWidth, this.bgHeight, 'Kim', 64, 1,'rgba(0, 0, 255, 1)')
        ];
        this.curtains = new Curtains(this.ctx, this.bgWidth, this.bgHeight, 'rgba(0, 0, 255, 1)');

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.canvas.width = this.bgWidth * this.scale;
        this.canvas.height = this.bgHeight * this.scale;
        // canvas.width = bgWidth * scale;
        // canvas.height = bgHeight * scale;
        this.ctx.scale(this.scale, this.scale);
    }

    animate(t :number) {
        // NOTE: this is like showing animation in paper
        window.requestAnimationFrame(this.animate.bind(this));
        // Clear page
        this.ctx.clearRect(0, 0, this.bgWidth, this.bgHeight);
        // Draw texts
        this.texts.forEach((text) => {
            text.draw(this.ctx);
            this.ctx.globalCompositeOperation = 'xor';
        });

        // this.ctx.globalCompositeOperation = 'lighter';
        // Draw curtains
        this.curtains.draw(this.ctx, 'white');
        // Temorary nameholder, will be modified using pixi.js
        this.ctx.fillStyle = 'blue';
        this.ctx.font = `bold 64px Arial`;
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.fillText('Yunsik Kim', this.bgWidth/2, this.bgHeight/2);
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        this.getResponsiveSize();

        if (this.isClicked) {
            this.circle.draw(this.ctx, "black");
        }
    }

    getResponsiveSize() {
        let ratio = this.curtains.mousePos.x / this.bgWidth;
        const minpx :number = 16;
        const maxpx :number = 450;
        const range :number = maxpx - minpx;

        this.texts[0].textHeight = minpx + range * ratio;
        this.texts[1].textHeight = maxpx - range * ratio;
    }

    nextPage(e :MouseEvent) {
        this.circle = new Circle(e.offsetX, e.offsetY, this.bgWidth, 5);
        let ratio = e.offsetX / this.bgWidth;
        if (ratio > 0.5) {
            this.isClicked = true;
            setTimeout(()=>{window.location.href = './blog'}, 2500);
        } else {
            this.isClicked = true;
            setTimeout(()=>{window.location.href = './portfolio'}, 2500);
        }

        return true;
    }

}