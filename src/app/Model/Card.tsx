"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./../CSS/page.module.css"

export default function Card(props: any) {
    const [isMouseHover, setIsMouseHover] = useState(false);
    const id :string = props.id;
    const title :string = props.title;
    const subTitle :string = props.subTitle;
    const tags :string[] = props.tags;
    const date :any = props.date;
    const context: string = props.context;

    function truncateToWords(text: string, wordLimit: number) {
        const words = text.trim().split(/\s+/);
        if (words.length <= wordLimit) {
          return text;
        }
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    console.log(tags)
    
    return (
        <Link className={styles.card}
        href={`content/${id}`}
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
        style={{textDecoration: 'none'}}
        >
            <div className={styles.title}>
                <h3 className={styles.main_title}>{truncateToWords(title, 5)}</h3>
                {/* <div className={styles.rectangle}></div> */}
            </div>
            <p className={styles.context}>
                {truncateToWords(subTitle, 15)}
            </p>
            <div className={styles.tag_section}>
                <div className={styles.tags}>
                    {tags ? 
                    tags.map(tag => <p key={tag}>{tag}</p>)
                    : ''}
                </div>
                <div className={styles.underline}></div>
            </div>
        </Link>
    );         //className={isMouseHover ? styles.card_hover : styles.card} 
}