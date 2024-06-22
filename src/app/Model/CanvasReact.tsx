"use client"
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas/Canvas";

export default function CanvasReact() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let [dimension, setDimension] = useState({width: 0, height: 0});

    useEffect(() => {
      // TRIED TO MAKE WIDTH HEIGHT AUTO DETECT FUNCTION
      // let canvasElement = document.getElementsByClassName(styles.hero_image);
      // let rect = canvasElement.getBoundingClientRect();

      if (canvasRef.current) {
        new Canvas(canvasRef.current);
      }
    }, []);

    return (     
      <canvas id="myCanvas" ref={canvasRef} style={{borderRadius: '9px', width: '676px', height: '394px'}} />
    );
  }