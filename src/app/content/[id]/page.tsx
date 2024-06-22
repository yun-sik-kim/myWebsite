import { connectDB } from "@/../util/database"
import { ObjectId } from "mongodb";
import Link from "next/link";
import styles from './CSS/page.module.css';

import { GET } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";

export default async function Content(props: any) {
    const db = (await connectDB).db("blog");
    let result = await db.collection('post').findOne(
        {
            _id: ObjectId.createFromHexString(props.params.id)
        }
    ); 
    let session = await getServerSession(GET);
    // !!! DELETE after test!!!
    if (session) {  
        console.log(session)
    }

    if (!result) {
        return (
            <div className={styles.grid_system}>
                <div style={{gridColumn: '11 / 12'}}>
                </div>
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

    return (
        <div className={styles.grid_system}>
            {session ?
                <div style={{gridColumn: '11 / 12'}}>
                    <Link href={`/wndlswkd/edit/${result._id}`}>   {/* !!! FIX if user login, activate this button redirect to edit page. */}
                        <button>
                            edit article
                        </button>   
                    </Link>
                </div>
                : null
            }
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
                    {result.context}
                </p>
            </div>
        </div>
    );
}