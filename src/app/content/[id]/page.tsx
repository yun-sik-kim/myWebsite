import { connectDB } from "@/../util/database"
import { ObjectId } from "mongodb";
import styles from './CSS/page.module.css';

export default async function Content(props: any) {
    const db = (await connectDB).db("blog");
    let result = await db.collection('JavaScript').findOne(
        {
            _id: new ObjectId(props.params.id)
        }
    ); 
    // const date = result.date.$dateToString()
    // console.log(result.date);
    // console.log(date);

    return (
        <div className={styles.grid_system}>
            <div className={styles.main_content}>
                <div className={styles.hero_section}>
                    <div className={styles.header}> 
                        <div className={styles.title}>
                            <h1 className={styles.main_title}>{result.title}</h1>
                            <h2 className={styles.sub_title}>{result.subTitle}</h2>
                        </div>
                        <p className={styles.date}>{result.date.toString()}</p>
                    </div>
                    <div className={styles.hero_image}>

                    </div>
                </div>
                <p className={styles.paragraph}>
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Lobortis scelerisque fermentum dui faucibus in ornare. Sed turpis tincidunt id aliquet risus feugiat in. Eget nulla facilisi etiam dignissim diam quis enim. In ante metus dictum at tempor commodo ullamcorper a. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Vitae suscipit tellus mauris a diam. Facilisis sed odio morbi quis commodo odio aenean. Vulputate ut pharetra sit amet. Leo urna molestie at elementum. Scelerisque felis imperdiet proin fermentum leo vel orci. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Non arcu risus quis varius quam. At lectus urna duis convallis convallis. Volutpat ac tincidunt vitae semper. Condimentum mattis pellentesque id nibh tortor.
                </p>
            </div>
        </div>
    );
}