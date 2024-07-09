'use client'
import Card from "./Card";
import CanvasReact from "./CanvasReact";
import { Post } from "@/types/Post";

export default function CardSection({ posts }: { posts: Post[] }) {

    return (
        <>
            {posts.map((post: Post, i: number)=>{
                return (
                    <Card 
                    key={post.id}    // !!!Need unite props into one code. props are spread all over the codes
                    post={post}
                    colour={i % 2 === 0 ? 'white' : 'blue'}
                    />
                )
            })}
          <CanvasReact />
        </>
    )
}