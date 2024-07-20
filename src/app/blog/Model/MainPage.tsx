'use client'
import { useState, useEffect, useCallback } from "react";
import MainImage from "@/app/blog/Model/MainImage"
import CardSection from "@/app/blog/Model/CardSection"
import styles from "@/app/blog/CSS/page.module.css"
import { Category } from "@/types/Category";
import { Post } from "@/types/Post";


export default function MainPage({ categories, posts }: { categories: Category[], posts: Post[] }) {
    const [ctgs, setCtg] = useState(categories);
    const [currentCategory, setCurrentCategory] = useState(categories[0].id);
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
        setCurrentCategory(selectedCtg.id);
        const index = ctgs.findIndex(category => category.id === selectedCtg.id);
        if (index !== -1) {
            const rearrangedCategories = [
                ...ctgs.slice(index),
                ...ctgs.slice(0, index)
            ];
            setCtg(rearrangedCategories);
        }
    }
    
    // const moveCtgRight = () => {
    //     const rearrangedCategories= [
    //         ...ctgs.slice(1),
    //         ctgs[0]
    //     ];
    //     setCtg(rearrangedCategories);
    // };
    
    // const moveCtgLeft = () => {
    //     const rearrangedCategories = [
    //         ...ctgs.slice(-1),
    //         ...ctgs.slice(0, -1)
    //     ];
    //     setCtg(rearrangedCategories);
    // };

    return (
        <div className={styles.set_main_grid}>
            <div className={styles.main_section}>
                <div className={styles.hero_section}>
                    <div className={styles.title}>
                        <h1>tech blog</h1>
                        <h2>by Yunsik Kim</h2>
                    </div>
                    <div className={styles.interactive_section}>
                        <p className={styles.quesiton}>{`Hi, what's your name?`}</p>
                        <p className={styles.answer}>______________</p>
                    </div>
                    {/* <FontAwesomeIcon icon={faChevronLeft} onClick={moveCtgLeft} style={{width: '22px', height: '22px'}} />
                    <MainImage categories={ctgs} />
                    <FontAwesomeIcon icon={faChevronRight} onClick={moveCtgRight} style={{width: '22px', height: '22px'}} /> */}
                </div>
                <div className={styles.category_bar}> 
                    {
                        ctgBar.map((ctg: Category, i: number) => {
                            return (
                                <button key={i} 
                                    className={`${styles.button} ${currentCategory === ctg.id ? styles.active : ''}`}  
                                    onClick={()=>handleCategory(ctg)}
                                >
                                    {ctg.categoryName}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <CardSection posts={currentPosts}/>
        </div>
    )
}