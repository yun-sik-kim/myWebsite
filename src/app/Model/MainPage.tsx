'use client'
import { useState, useEffect, useCallback } from "react";
import MainImage from "@/app/Model/MainImage"
import CardSection from "@/app/Model/CardSection"
import styles from "@/app/CSS/page.module.css"

interface Category {
    id: string;
    categoryName: string;
    imgUrl: string;
}

interface Post {
    id: string;
    postNo: number;
    category: string;
    title: string;
    subTitle: string;
    date: string;
    tag: string;
    context: string;
}

export default function MainPage({ categories, posts }: { categories: any, posts: any }) {
    const ctgList = categories.map((category: Category) => category.categoryName);
    // const [ctgList, setCtgList] = useState(categories.map((category: Category) => category.categoryName));
    const [currentCtg, setCurrentCtg] = useState(ctgList[0]);
    const [mainCtg, setMainCtg] = useState(categories[0]);

    const getCurrentPosts = useCallback(() => {
        return posts.filter((post: Post) => {
            if (currentCtg === 'all') {
                return true;
            } else {
                return post.category === currentCtg;
            }
        });
    }, [currentCtg, posts]);
    const [currentPosts, setCurrentPosts] = useState(getCurrentPosts());

    useEffect(() => {
        setCurrentPosts(getCurrentPosts());
        const ctgIndex = categories.findIndex((category: Category) => category.categoryName === currentCtg);
        setMainCtg(categories[ctgIndex]);
    }, [currentCtg, categories, getCurrentPosts]);
    const changeCategory = (category: string) => {
        setCurrentCtg(category);
    }

    // const moveIndexRight = () => {
    //     if (currentCtg > categories.length) {
    //         setCurrentIndex(0)
    //     } else {
    //         setCurrentIndex(mainIndex + 1);
    //     }
    // };
    
    // const moveIndexLeft = () => {
    //     if (currentCtg === 0) {
    //         setCurrentIndex(mainIndex + categories.length)
    //     } else {
    //         setCurrentIndex(mainIndex -1);
    //     }
    // };

    return (
        <div>
            <div className={styles.set_main_grid}>
                <div className={styles.hero_section}>
                    <button>Left</button>
                    <MainImage mainCtg={mainCtg} categories={categories} />
                    <button>Right</button>
                </div>
                <div className={styles.category_bar}> 
                    {
                        ctgList.map((ctg: any, i: number) => {
                            return (
                                <button key={ctg} className={styles.button} onClick={() => changeCategory(ctg)}>{ctg}</button>
                            )
                        })
                    }
                </div>
            </div>
            <CardSection posts={currentPosts}/>
        </div>
    )
}