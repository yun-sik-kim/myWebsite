'use client'
import Card from "./Card";
import styles from '@/app/CSS/page.module.css'

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

export default function CardSection({ posts }: { posts: any }) {
    // console.log();

    return (
        <div className={styles.set_grid}>
            {
            posts.map((a: any, i: number)=>{
                let title = posts[i].title;
                let subtitle = posts[i].subTitle;
                let maxTitleLength = 42;
                let maxSubLength = 65;
                
                if (title.length > maxTitleLength) {
                    title = title.slice(0,maxTitleLength) + '...';
                }
                if (subtitle.length > maxSubLength) {
                    subtitle = subtitle.slice(0,maxSubLength) + '...';
                }
                return (
                    <Card key={posts[i].id.toString()}    // !!!Need unite props into one code. props are spread all over the codes
                    id={posts[i].id.toString()}
                    title={title} 
                    subTitle={subtitle}
                    colour={posts[i].colour}
                    date={posts[i].date}
                    />
                )
            })
          }
        </div>
    )
}