import { Wave } from './Wave';
import { WaveGroup } from './WaveGroup';
// import { Point } from './Point';
import { Boat } from './Boat';

export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private waves: WaveGroup;
    private scale: number;
    private logicalWidth: number = 0;
    private logicalHeight: number = 0;
    private boat: Boat;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.scale = window.devicePixelRatio; // Get the device pixel ratio

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.waves = new WaveGroup(this.logicalWidth, this.logicalHeight, 3);
        this.boat = new Boat(this.waves.mainWave, this.canvas, '/boat2.svg');

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.logicalWidth = this.canvas.offsetWidth;
        this.logicalHeight = this.canvas.offsetHeight;
        this.canvas.width = this.logicalWidth * this.scale;
        this.canvas.height = this.logicalHeight * this.scale;

        this.ctx.scale(this.scale, this.scale);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.waves.drawBackground(this.ctx);
        this.boat.draw(this.ctx);
        this.waves.drawForeground(this.ctx);
        // this.wave.draw(this.ctx);
        // this.boat.draw();

        requestAnimationFrame(this.animate.bind(this));
    }

    // private handleMouseMove(event: MouseEvent) {
    //     const rect = this.ctx.canvas.getBoundingClientRect();
    //     const mouseX = event.clientX - rect.left;
    //     this.boat.updatePosition(mouseX);
    // }
}