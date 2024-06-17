"use client"
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas/Canvas";

export default function CanvasReact() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let [dimension, setDimension] = useState({width: 0, height: 0});

    useEffect(() => {
        if (canvasRef.current) {
            new Canvas(canvasRef.current);
        }
      }, []);

    return (     
      <canvas ref={canvasRef} />
    );
  }