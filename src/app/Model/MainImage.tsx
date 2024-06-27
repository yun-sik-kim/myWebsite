"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CanvasReact from "./CanvasReact";
import styles from "@/app/CSS/page.module.css";

import { Category } from "./MainPage";  // DATA TYPE

export default function MainImage({ categories }: { categories: Category[] }) {
    let textColor = '#FFF';

    return (     
        <>
            {
                categories[0].categoryName === 'all' ? 
                <>
                    <div className={styles.main_image} style={{color: textColor}}>
                    <CanvasReact /> 
                    {/* <h2 className={styles.title}>blog</h2>
                    <h3 className={styles.category}>{mainCtg.categoryName}</h3> */}
                    </div>
                    <SideImage categoryName={categories[1].categoryName} src={categories[1].imgUrl} textColour='#FFF'/>
                    <SideImage categoryName={categories[2].categoryName} src={categories[2].imgUrl} textColour='#FFF'/>
                </>
                :
                <>
                    <div className={styles.main_image} style={{color: textColor}}>
                    {/* <Image src={categories[0].imgUrl} alt={`Picture of ${categories[0].categoryName}`} width={500} height={500} /> */}
                    <img src={categories[0].imgUrl} />
                    <h2 className={styles.title}>blog</h2>
                    <h3 className={styles.category}>{categories[0].categoryName}</h3>
                    </div>
                    <SideImage categoryName={categories[1].categoryName} src={categories[1].imgUrl} textColour='#FFF'/>
                    <SideImage categoryName={categories[2].categoryName} src={categories[2].imgUrl} textColour='#FFF'/>
                </>
            }
        </>
    );
}

function SideImage({ categoryName, src, textColour }: { categoryName: string, src: string, textColour: string }){

    return (
        <>
            {
                categoryName === 'all' ?
                <>
                    <div className={styles.side_image}>
                        <CanvasReact /> 
                        <p className={styles.rotated_text} style={{color: textColour}}>{categoryName}</p>
                    </div>
                </>
                :
                <>
                    <div className={styles.side_image}>
                        {/* <Image src={src} alt={`Picture of ${categoryName}`} width={500} height={500} /> */}
                        <img src={src} />
                        <p className={styles.rotated_text} style={{color: textColour}}>{categoryName}</p>
                    </div>
                </>
            }
        </>
    )
}