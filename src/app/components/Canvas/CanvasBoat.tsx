'use client'
import { useEffect, useRef } from 'react'
import { Canvas } from "./Canvas";
import styles from './CanvasBoat.module.css'

export default function CanvasBoat() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const width = 2000;
    const height = 500;


    useEffect(()=>{
        if (canvasRef.current) {
            new Canvas(canvasRef.current);
        }
    })

    return (
        <canvas ref={canvasRef} className={styles.canvas} width={width} height={height}></canvas>
    )
}