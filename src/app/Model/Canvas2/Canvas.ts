// // import { FloatingText } from "./FloatingText";
// // import { Curtains } from "./Curtains";
// // import { Circle } from "./Circle";

// export class Canvas {
//     private canvas: HTMLCanvasElement;
//     private ctx: CanvasRenderingContext2D | null;
//     bgWidth!: number;   // using ! operator to tell TypeScript that these properties will definitely be assigned before they are used.
//     bgHeight!: number;
//     scale!: number;
//     // texts!: FloatingText[];
//     // curtains!: Curtains;
//     // circle!: Circle;
//     isClicked!: boolean;

//     constructor(canvas: HTMLCanvasElement, width: number, height: number) {
//         this.canvas = canvas;
//         this.ctx = this.canvas.getContext('2d');
//         if (this.ctx === null) return;

//         // this.bgWidth = document.documentElement.clientWidth; // when you want full screen canvas
//         // this.bgHeight = document.documentElement.clientHeight; // when you want full screen canvas
//         this.scale = (window.devicePixelRatio > 1)? 2 : 1;
//         this.bgWidth = width;
//         this.bgHeight = height;

//         const myCanvas = document.getElementById('myCanvas');

//         this.isClicked = false;

//         window.addEventListener('resize', this.resize.bind(this), false);
//         myCanvas!.addEventListener('click', this.nextPage.bind(this));
//         this.resize();

//         window.requestAnimationFrame(this.animate.bind(this));
//     }

//     resize() {
//         // Set the width and height in canvas pixels
//         this.canvas.width = this.bgWidth * this.scale;
//         this.canvas.height = this.bgHeight * this.scale;
//         this.ctx!.scale(this.scale, this.scale); // Scale the context to ensure that the drawing operations are at the correct scale
//     }

//     animate(t :number) {
//         // NOTE: this is like showing animation in paper
//         window.requestAnimationFrame(this.animate.bind(this));
//         // Clear page
//         this.ctx!.clearRect(0, 0, this.bgWidth, this.bgHeight);
//         // Draw texts
        
//         // Temorary nameholder, will be modified using pixi.js
//         this.ctx!.fillStyle = 'white';
//         this.ctx!.font = `bold 24px Arial`;
//         this.ctx!.textBaseline = "middle";
//         this.ctx!.textAlign = "center";
//         this.ctx!.fillText('Yunsik Kim', this.bgWidth/2, this.bgHeight/2);
//         // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//         this.getResponsiveSize();

//         if (this.isClicked) {
//             this.circle.draw(this.ctx!, "black");
//         }
//     }

//     drawText(x: number, y: number, title: string, subtitle: string, colour: string) {
//         this.x = this.bgWidth / 2;
//         this.y = this.bgHeight / 2;
//         ctx.fillStyle = this.color;
//         // ctx.beginPath();
//         ctx.font = `bold ${this.textHeight}px Arial`;
//         ctx.textBaseline = "middle";
//         ctx.textAlign = "center";

//         ctx.fillText(this.text, this.x, this.y);
//     }

//     getResponsiveSize() {
//         let ratio = this.curtains.mousePos.x / this.bgWidth;
//         const minpx :number = 16;
//         const maxpx :number = 128;
//         const range :number = maxpx - minpx;

//         this.texts[0].textHeight = minpx + range * ratio;
//         this.texts[1].textHeight = maxpx - range * ratio;
//         this.texts[2].textHeight = minpx + range * ratio;
//         this.texts[3].textHeight = maxpx - range * ratio;
//     }

//     nextPage(e :MouseEvent) {
//         this.circle = new Circle(e.offsetX, e.offsetY, this.bgWidth, 5);
//         let ratio = e.offsetX / this.bgWidth;
//         if (ratio < 1 && ratio > 0.5) {
//             this.isClicked = true;
//             setTimeout(()=>{window.location.href = './blog'}, 1500);
//         } else if (ratio < 0.5 && ratio > 0) {
//             this.isClicked = true;
//             setTimeout(()=>{window.location.href = './portfolio'}, 1500);
//         }

//         return true;
//     }

// }