import styles from '@/app/content/[id]/CSS/page.module.css';

export default function NotFound(){
    return (
        <div className={styles.grid_system}>
            <div className={styles.main_content}>
                <div className={styles.hero_section}>
                    <div className={styles.header}> 
                        <div className={styles.title}>
                            <h1 className={styles.main_title}>hmm... seems like page does not exist</h1>
                            <h2 className={styles.sub_title}>please reload or go back to main page</h2>
                        </div>
                        <p className={styles.date}>sorry!</p>
                    </div>
                    <div className={styles.hero_image}>
    
                    </div>
                </div>
            </div>
        </div>
    );

}

