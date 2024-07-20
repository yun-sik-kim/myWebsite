import { Point } from "./Point";

export class Wave {
    private canvasHeight: number;
    private waveWidth: number;
    private waveHeight: number;
    private totalwWavePoints: number;
    private colour: string;
    private pointsCoordinate: Point[];
    private pointGap: number;

    constructor(canvasWidth: number, canvasHeight: number, colour: string) {
        this.canvasHeight = canvasHeight;

        this.waveWidth = canvasWidth;
        this.waveHeight = canvasHeight * 0.5;

        this.totalwWavePoints = 12;
        this.pointGap = this.waveWidth / (this.totalwWavePoints - 1);

        this.colour = colour;

        this.pointsCoordinate = [];
        this.initPoints();
    }

    initPoints() {
        for (let i = 0; i < this.totalwWavePoints; ++i) {
            const point = new Point(this.pointGap * i, this.waveHeight);
            this.pointsCoordinate[i] = point;
        }
    }

    get getPoints(){
        return this.pointsCoordinate;
    }

    get getPointGap() {
        return this.pointGap;
    }

    get getWaveWidth() {
        return this.waveWidth;
    }

    get getcanvasHeight() {
        return this.canvasHeight;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.colour;
        ctx.beginPath();
        let prevX = this.pointsCoordinate[0].x;
        let prevY = this.pointsCoordinate[0].y;
        ctx.moveTo(prevX, prevY);

        // Update second to second last points
        for (let i = 1; i < this.totalwWavePoints; ++i) {
        // for (let i = 0; i < this.totalwWavePoints; ++i) {
            if (i < this.totalwWavePoints -1) {
            // if (true) {
                this.pointsCoordinate[i].update();
            }

            const cx = (prevX + this.pointsCoordinate[i].x) / 2;
            const cy = (prevY + this.pointsCoordinate[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            // move to next point
            prevX = this.pointsCoordinate[i].x;
            prevY = this.pointsCoordinate[i].y;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.waveWidth, this.canvasHeight);
        ctx.lineTo(0, this.canvasHeight);
        ctx.fill();
    }
}