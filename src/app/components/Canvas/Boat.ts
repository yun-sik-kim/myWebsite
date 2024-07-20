import { Wave } from "./Wave";

export class Boat {
    private canvas: HTMLCanvasElement;
    private x: number = 0;
    private y: number = 0;
    private size: number;
    private speed: number;
    private wave: Wave;
    // private colour: string;
    private mousePos: {x: number, y: number};

    private lastCollisionTime: number; // New property to track last collision time
    private collisionCooldown: number; // Cooldown period in milliseconds

    private image: HTMLImageElement;

    constructor(wave: Wave, canvas: HTMLCanvasElement, imageSrc: string) {
        this.canvas = canvas;
        this.wave = wave;
        this.size = 155;
        // this.colour = '#444655';
        this.speed = 0.8; // Adjust this value to change the speed of movement
        this.mousePos = {x: 0, y: 0};

        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this), false);

        this.lastCollisionTime = 0;
        this.collisionCooldown = 500; // 500ms cooldown

        this.initPosition();

        // Load the image
        this.image = new Image();
        this.image.src = imageSrc;
        this.image.onload = () => {
            // You can adjust the size of the boat based on the loaded image if needed
            // this.width = this.image.width;
            // this.height = this.image.height;
        };
    }

    private initPosition() {
        this.x = this.wave.getWaveWidth * (Math.random() * 0.6 + 0.2);
        this.y = this.wave.getcanvasHeight / 2;
    }

    private updatePosition() {
        // Find the y-coordinate on the wave at the current x position
        const wavePoints = this.wave.getPoints;
        const pointGap = this.wave.getPointGap;
        
        // Ensure x is within the bounds of the wave
        const clampedX = Math.max(0, Math.min(this.x, this.wave.getWaveWidth - 1));
        
        let index = Math.floor(clampedX / pointGap);
        let nextIndex = Math.min(index + 1, wavePoints.length - 1);
        
        // Ensure index is not negative
        index = Math.max(0, index);
        
        let t = (clampedX % pointGap) / pointGap;
        this.y = wavePoints[index].y * (1 - t) + wavePoints[nextIndex].y * t - this.size;
    }

    onMouseMove(e: MouseEvent) {
        const rect = this.canvas.getBoundingClientRect();
        this.mousePos.x = e.clientX - rect.left;
        this.mousePos.y = e.clientY - rect.top;

        console.log(`Mouse X: ${this.mousePos.x}, Mouse Y: ${this.mousePos.y}`);
    }

    bounceWindow() {
        const minX = this.size / 2 ;
        const maxX = this.wave.getWaveWidth - (this.size / 2 );

        if (this.x <= minX || this.x >= maxX) {
            this.speed *= -1;
            this.x += this.speed;
        }
    }

    collide() {
        const currentTime = Date.now();
        if (currentTime - this.lastCollisionTime < this.collisionCooldown) {
            return; // Skip collision check if we're still in the cooldown period
        }
        
        if (this.mousePos.x >= this.x - (this.size / 2) && this.mousePos.x < this.x - (this.size / 2) + this.size / 2) {
            if (this.mousePos.y > this.y && this.mousePos.y < this.y + this.size) {
                this.speed *= -1;
                this.lastCollisionTime = currentTime;
                console.log('collide left!')
            }
        }
        if (this.mousePos.x >= (this.x - (this.size / 2) + this.size / 2) && this.mousePos.x < this.x - (this.size / 2) + this.size) {
            if (this.mousePos.y > this.y && this.mousePos.y < this.y + this.size) {
                this.speed *= -1;
                this.lastCollisionTime = currentTime;
                console.log('collide right!')
            }
        }
    }

    update() {
        this.x += this.speed;
        this.updatePosition();
        this.collide();
        this.bounceWindow();
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x - (this.size / 2), this.y + (this.size / 3.8), this.size, this.size);
        this.update();
    }
}