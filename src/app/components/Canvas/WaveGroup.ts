import { Wave } from "./Wave";

export class WaveGroup {
    private totalWaves: number;
    private waves: Wave[];
    private colours: string[];

    constructor(canvasWidth: number, canvasHeight: number, totalWaves: number) {
        this.totalWaves = totalWaves;
        this.colours = ['rgba(249, 248, 113, 0.4)', 'rgba(112, 189, 164, 0.4)', 'rgba(0, 122, 255, 1)'];
        this.waves = [];

        for (let i = 0; i < this.totalWaves; ++i) {
            const wave = new Wave(canvasWidth, canvasHeight, this.colours[i]);
            this.waves[i] = wave;
        }
    }

    get mainWave() {
        return(this.waves[this.totalWaves - 1]);
    }

    drawBackground(ctx: CanvasRenderingContext2D) {
        // Draw all waves except the last one
        for (let i = 0; i < this.totalWaves - 1; ++i) {
            this.waves[i].draw(ctx);
        }
    }

    drawForeground(ctx: CanvasRenderingContext2D) {
        // Draw only the last wave
        this.waves[this.totalWaves - 1].draw(ctx);
    }

    // draw(ctx: CanvasRenderingContext2D) {
    //     // for (let i = 0; i < this.totalWaves; ++i) {
    //     //     this.waves[i].draw(ctx);
    //     // }
    //     this.drawBackground(ctx);
    //     this.drawForeground(ctx);
    // }
}