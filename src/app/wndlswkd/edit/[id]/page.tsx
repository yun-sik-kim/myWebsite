import EditForm from "@/app/wndlswkd/edit/[id]/EditForm";
import { connectDB } from "@/../util/database"
import { ObjectId } from "mongodb";

import { GET } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

import { Post } from "@/types/Post";

export default async function Edit(props: any) {
    let session = await getServerSession(GET);
    if (!session) {  
        return notFound();
    }
    
    const db = (await connectDB).db("blog");
    let result = await db.collection('post').findOne(
        {
            _id: ObjectId.createFromHexString(props.params.id)  // new ObjectId(product_id) is depreicated
        }
    );
    if (!result) {
        return (
            <p>The collection does not exist check DB</p>
        )
    };

    let plainPost = {
        // postNo: result.postNo,
        id: result._id.toString(),
        category: result.category,
        title: result.title,
        subTitle: result.subTitle,
        date: result.date,
        context: result.context,
        tags: result.tags,
    }

    console.log(plainPost)

    return (
        <EditForm post={plainPost} />
    );
}