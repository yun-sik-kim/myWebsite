"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./../CSS/page.module.css"
import { Post } from "@/types/Post";

export default function Card({ post, colour }: { post: Post, colour: string }) {
    const [isMouseHover, setIsMouseHover] = useState(false);
    const blue = '#007AFF';
    const black = '#1C1C1E';
    const white = '#F2F2F7';
    // const id :string = post.id;
    // const title :string = post.title;
    // const subTitle :string = post.subTitle;
    // const tags :string[] = post.tags;
    // const date :any = post.date;
    // const context: string = post.context;
    // const colour: string = post.colour;

    function truncateToWords(text: string, wordLimit: number) {
        const words = text.trim().split(/\s+/);
        if (words.length <= wordLimit) {
          return text;
        }
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    // console.log(tags)
    
    return (
        <Link className={styles.card}
        href={`blog/content/${post.id}`}
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
        style={colour === 'blue' 
                ? {backgroundColor: blue, color: white}
                : {backgroundColor: white, color: black}
            }
        >
            <Image className={styles.line_decor_top} 
            src='/decor 1.svg' width={50} height={50} alt="decoration" 
            style={colour === 'blue'
                ? {filter: 'brightness(0) saturate(100%) invert(92%) sepia(13%) saturate(32%) hue-rotate(197deg) brightness(100%) contrast(103%)'}
                : {}
            }
            />
            <h3 className={styles.main_title}>{truncateToWords(post.title, 5)}</h3>
            <p className={styles.context}>
                {truncateToWords(post.subTitle, 5)}
            </p>
            <div className={styles.bot_section}>
                <div className={styles.tag_section}>
                    <div className={styles.tags}>
                        {post.tags ? 
                        post.tags.map(tag => <p key={tag}>{tag}</p>)
                        : ''}
                    </div>
                    <div className={styles.underline}
                    style={colour === 'blue' 
                        ? {backgroundColor: white}
                        : {backgroundColor: black}
                    }>
                    </div>
                </div>
                <p className={styles.date}>{formatDate(post.date)}</p>
            </div>
            <Image className={styles.line_decor_bot} 
            src='/decor 2.svg' width={50} height={50} alt="decoration" 
            style={colour === 'blue'
                ? {filter: 'brightness(0) saturate(100%) invert(92%) sepia(13%) saturate(32%) hue-rotate(197deg) brightness(100%) contrast(103%)'}
                : {}
            }
            />
        </Link>
    );         //className={isMouseHover ? styles.card_hover : styles.card} 
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' });
    const year = date.getFullYear();
  
    // Add ordinal suffix to day
    const ordinalSuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    }
  
    return `${day}${ordinalSuffix(day)} ${month} ${year}`;
  }