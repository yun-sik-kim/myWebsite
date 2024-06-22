import EditForm from "@/app/wndlswkd/edit/[id]/EditForm";
import { connectDB } from "@/../util/database"
import { ObjectId } from "mongodb";
import styles from "@/app/wndlswkd/CSS/page.module.css"

interface PostData {
    postNo: number;
    category: string;
    title: string;
    subTitle: string;
    date: string;
    tag: string;
    context: string;
    colour: string;
}

export default async function Edit(props: PostData) {
    const db = (await connectDB).db("blog");
    let result = await db.collection('post').findOne(
        {
            _id: ObjectId.createFromHexString(props.params.id)  // new ObjectId(product_id) is depreicated
        }
    );

    return (
        <div className={styles.grid_system}>
            <div className={styles.main_content}>
                <EditForm 
                    postNo={result!.postNo}
                    category={result!.category}
                    title={result!.title}
                    subTitle={result!.subTitle}
                    date={result!.date}
                    tag={result!.tag}
                    context={result!.context}
                    colour={result!.colour}
                />
            </div>
        </div>
    );
}