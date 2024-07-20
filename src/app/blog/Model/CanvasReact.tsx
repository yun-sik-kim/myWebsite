"use client"
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas1/Canvas";
import styles from "@/app/blog/CSS/page.module.css"

export default function CanvasReact() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      function screenRatio(width: number){
        const phi = (1 + Math.sqrt(5)); // Golden ratio
        const height = width / phi;
        return height;
      }

      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect(); 
        const width = rect.width;
        const height = rect.height;
        // const height = screenRatio(rect.width) * 2;
        new Canvas(canvasRef.current, width, height);
      }
    }, []);

    return (     
      <div className={styles.cavas_size}>
        <canvas id="myCanvas" ref={canvasRef} 
          style={{
            borderRadius: '9px', 
            width: '100%', 
            height: '100%', 
            background: '#007AFF',
            // backgroundImage: 'url("/ui:ux.jpeg")',
            backgroundSize: 'cover',          // Ensures the background image covers the entire element
            backgroundPosition: 'center',     // Centers the background image
            backgroundRepeat: 'no-repeat'     // Ensures the image does not repeat
        }} />
      </div>
    );
  }