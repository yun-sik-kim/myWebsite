'use client'
import Card from "./Card";
import CanvasReact from "./CanvasReact";

export default function CardSection({ posts }: { posts: any }) {

    return (
        <>
            {
            posts.map((a: any, i: number)=>{
                let title = posts[i].title;
                let subtitle = posts[i].subTitle;

                return (
                    <Card key={posts[i].id.toString()}    // !!!Need unite props into one code. props are spread all over the codes
                    id={posts[i].id.toString()}
                    title={title} 
                    subTitle={subtitle}
                    date={posts[i].date}
                    context={posts[i].context}
                    tags={posts[i].tags}
                    />
                )
            })
          }
          <CanvasReact />
        </>
    )
}