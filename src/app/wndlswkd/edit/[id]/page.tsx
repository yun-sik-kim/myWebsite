import EditForm from "@/app/wndlswkd/edit/[id]/EditForm";
import { connectDB } from "@/../util/database"
import { ObjectId } from "mongodb";

import { GET } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

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

    let plainPostData = {
        postNo: result.postNo,
        category: result.category,
        title: result.title,
        subTitle: result.subTitle,
        date: result.date,
        tag: result.tag,
        context: result.context,
        colour: result.colour,
    }

    console.log(plainPostData)

    return (
        <EditForm postData={plainPostData} />
    );
}