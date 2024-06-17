"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./../CSS/page.module.css"

export default function Card(props: any) {
    const [isMouseHover, setIsMouseHover] = useState(false);

    const id :string = props.id;
    const title :string = props.title;
    const subTitle :string = props.subTitle;
    const colour :string = props.colour;
    const tags :string[] = props.tags;
    const date :any = props.date; //NEED FIX!!!

    return (
        <div className={styles.card} //className={isMouseHover ? styles.card_hover : styles.card} 
        style={{backgroundColor : colour}}>
            <Link 
            href={`content/${id}`}
            onMouseEnter={() => setIsMouseHover(true)}
            onMouseLeave={() => setIsMouseHover(false)}
            className={styles.link}
            >
                <div className={styles.title}>
                    <h3 className={styles.main_title}>{title}</h3>
                    <h4 className={styles.sub_title}>{subTitle}</h4>
                </div>
                <p className={styles.date}>20th/Jun/2024</p>
                {/* !!! NEED FIX update {date} */}
                <div className={styles.progress_bar}></div>
                <div className={styles.progress_bar_achieve}></div>
            </Link>
        </div>
    );
}