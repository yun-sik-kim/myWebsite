"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CanvasReact from "./CanvasReact";
import styles from "@/app/CSS/page.module.css";

interface Category {
    id: string;
    categoryName: string;
    imgUrl: string;
}

export default function MainImage(props: any) {
    const mainCtg: Category = props.mainCtg;
    const newCategories: Category[] = [...props.categories];

    let textColor = '#FFF';

    // Find the index of the mainCtg
    const mainIndex = newCategories.findIndex(category => category.id === mainCtg.id);
    // const [currentIndex, setCurrentIndex] = useState(newCategories.findIndex(category => category.id === mainCtg.id));

    // useEffect(()=>{
    //     if (mainIndex !== -1 && mainIndex !== 0) {
    //         // Remove the main category from its current position
    //         const slicedCategories: Category[] = newCategories.splice(0, mainIndex);
    //         // Move the main category to the front
    //         const mainCategory = newCategories.shift();
    //         if (mainCategory) {
    //             newCategories.unshift(mainCategory);
    //         }
    //         // Add the sliced categories to the back of the array
    //         newCategories.push(...slicedCategories);
    //     }
    // }, [mainCtg, newCategories, mainIndex]);

    if (mainIndex !== -1 && mainIndex !== 0) {
        // Remove the main category from its current position
        const slicedCategories: Category[] = newCategories.splice(0, mainIndex);
        // Move the main category to the front
        const mainCategory = newCategories.shift();
        if (mainCategory) {
            newCategories.unshift(mainCategory);
        }
        // Add the sliced categories to the back of the array
        newCategories.push(...slicedCategories);
    }

    return (     
        <>
            {
                newCategories[0].categoryName === 'all' ? 
                <>
                    <div className={styles.main_image} style={{color: textColor}}>
                    <CanvasReact /> 
                    {/* <h2 className={styles.title}>blog</h2>
                    <h3 className={styles.category}>{mainCtg.categoryName}</h3> */}
                    </div>
                    <SideImage categoryName={newCategories[1].categoryName} src={newCategories[1].imgUrl} textColour='#FFF'/>
                    <SideImage categoryName={newCategories[2].categoryName} src={newCategories[2].imgUrl} textColour='#FFF'/>
                </>
                :
                <>
                    <div className={styles.main_image} style={{color: textColor}}>
                    <Image src={newCategories[0].imgUrl} alt={`Picture of ${newCategories[0].categoryName}`} />
                    <h2 className={styles.title}>blog</h2>
                    <h3 className={styles.category}>{newCategories[0].categoryName}</h3>
                    </div>
                    <SideImage categoryName={newCategories[1].categoryName} src={newCategories[1].imgUrl} textColour='#FFF'/>
                    <SideImage categoryName={newCategories[2].categoryName} src={newCategories[2].imgUrl} textColour='#FFF'/>
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
                    <Image src={src} alt={`Picture of ${categoryName}`}/>
                    <p className={styles.rotated_text} style={{color: textColour}}>{categoryName}</p>
                </div>
            </>
        }
    </>
)
}