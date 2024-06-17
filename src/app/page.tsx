import { connectDB } from "@/../util/database"
import { MongoClient } from "mongodb"
import styles from "./CSS/page.module.css"
import CanvasReact from "./Model/CanvasReact"
import Card from "./Model/Card"

export default async function BlogHome() {
    const client = await connectDB; // !!! DB in/output code must be written inside server component only. (user can read in client component)
    const db = client.db("blog");
    let result = await db.collection('JavaScript').find().toArray(); 

    return (
        <div className={styles.grid_system}>
          <div className={styles.hero_image}>
              <p>This is place holder</p>
            </div>
          <div className={styles.new_post}><h3>H23ri</h3></div>
          {
            result.map((a: any, i: number)=>{
                return (
                    <Card key={result[i]._id.toString()}    // !!!Need unite props into one code. props are spread all over the codes
                    id={result[i]._id.toString()}
                    title={result[i].title} 
                    subTitle={result[i].subTitle}
                    colour={result[i].colour}
                    // date={result[i].date}
                    />
                )
            })
          }
        </div>
    ) 
}