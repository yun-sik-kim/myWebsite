import { connectDB } from "@/../util/database"
import { MongoClient } from "mongodb"
import styles from "./CSS/page.module.css"
import CanvasReact from "./Model/CanvasReact"
import Card from "./Model/Card"
import NewCard from "./Model/NewCard"

export default async function BlogHome() {
    const client = await connectDB; // !!! DB in/output code must be written inside server component only. (user can read in client component)
    const db = client.db("blog");
    let result = await db.collection('post').find().sort({ date: -1 }).toArray();
    const newPost = 0;

    return (
        <div className={styles.grid_system}>
          <div className={styles.hero_image}>
            <CanvasReact />
          </div>
          <div className={styles.new_post}>
            <NewCard key={result[newPost]._id.toString()}    // !!!Need unite props into one code. props are spread all over the codes
              id={result[newPost]._id.toString()}
              title={result[newPost].title} 
              subTitle={result[newPost].subTitle}
              colour={result[newPost].colour}
              date={result[newPost].date}
            />
          </div>
          {
            result.map((a: any, i: number)=>{
              let title = result[i].title;
              let subtitle = result[i].subTitle;
              let maxTitleLength = 42;
              let maxSubLength = 65;
              
              if (title.length > maxTitleLength) {
                title = title.slice(0,maxTitleLength) + '...';
              }
              if (subtitle.length > maxSubLength) {
                subtitle = subtitle.slice(0,maxSubLength) + '...';
              }
                return (
                    <Card key={result[i]._id.toString()}    // !!!Need unite props into one code. props are spread all over the codes
                    id={result[i]._id.toString()}
                    title={title} 
                    subTitle={subtitle}
                    colour={result[i].colour}
                    date={result[i].date}
                    />
                )
            })
          }
        </div>
    ) 
}