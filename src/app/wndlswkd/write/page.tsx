import WriteForm from "@/app/wndlswkd/write/WriteForm";
import styles from "@/app/wndlswkd/CSS/page.module.css"
import { connectDB } from "@/../util/database"

export default async function Write() {
    const db = (await connectDB).db("blog");
    let result = await db.collection('postNo').findOne({});

    if (!result) {
        return (
            <p>The page does not exist check DB</p>
        )
    };
    return (
        <div className={styles.grid_system}>
            <div className={styles.main_content}>
                <WriteForm 
                    postNo={result.totalPost}
                />
            </div>
        </div>
    );
}