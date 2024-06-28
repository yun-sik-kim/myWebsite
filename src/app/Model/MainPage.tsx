'use client'
import { useState, useEffect, useCallback } from "react";
import MainImage from "@/app/Model/MainImage"
import CardSection from "@/app/Model/CardSection"
import styles from "@/app/CSS/page.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; 

export interface Category {
    id: string;
    categoryName: string;
    imgUrl: string;
}

export interface Post {
    id: string;
    postNo: number;
    category: string;
    title: string;
    subTitle: string;
    date: string;
    tag: string;
    context: string;
}

export default function MainPage({ categories, posts }: { categories: Category[], posts: Post[] }) {
    const [ctgs, setCtg] = useState(categories);
    const [currentPosts, setCurrentPosts] = useState(posts);
    const ctgBar = [... categories];

    const getCurrentPosts = useCallback(() => {
        return posts.filter((post: Post) => {
            if (ctgs[0].categoryName === 'all') {
                return true;
            } else {
                return post.category === ctgs[0].categoryName;
            }
        });
    }, [ctgs, posts]);

    useEffect(() => {
        setCurrentPosts(getCurrentPosts());
    }, [ctgs, getCurrentPosts]);

    const handleCategory = (selectedCtg: Category) => {
        const index = ctgs.findIndex(category => category.id === selectedCtg.id);
        if (index !== -1) {
            const rearrangedCategories = [
                ...ctgs.slice(index),
                ...ctgs.slice(0, index)
            ];
            setCtg(rearrangedCategories);
        }
    }
    
    const moveCtgRight = () => {
        const rearrangedCategories= [
            ...ctgs.slice(1),
            ctgs[0]
        ];
        setCtg(rearrangedCategories);
    };
    
    const moveCtgLeft = () => {
        const rearrangedCategories = [
            ...ctgs.slice(-1),
            ...ctgs.slice(0, -1)
        ];
        setCtg(rearrangedCategories);
    };

    return (
        <div>
            <div className={styles.set_main_grid}>
                <div className={styles.hero_section}>
                    {/* <button onClick={moveCtgLeft}> */}
                    <FontAwesomeIcon icon={faChevronLeft} onClick={moveCtgLeft} style={{width: '22px', height: '22px'}} />
                    {/* </button> */}
                    <MainImage categories={ctgs} />
                    {/* <button onClick={moveCtgLeft}> */}
                    <FontAwesomeIcon icon={faChevronRight} onClick={moveCtgRight} style={{width: '22px', height: '22px'}} />
                    {/* </button> */}
                </div>
                <div className={styles.category_bar}> 
                    {
                        ctgBar.map((ctg: Category, i: number) => {
                            return (
                                <button key={i} className={styles.button} onClick={()=>handleCategory(ctg)}>{ctg.categoryName}</button>
                            )
                        })
                    }
                </div>
            </div>
            <CardSection posts={currentPosts}/>
        </div>
    )
}