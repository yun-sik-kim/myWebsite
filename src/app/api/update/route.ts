import { NextResponse } from "next/server";
import { connectDB } from "@/../util/database";

export async function POST(request: Request) {
    const req = await request.json();
    // checkInputError(req); // Clientside checks empty string, but to prevents unexpected cases

    try {
        const db = (await connectDB).db('blog'); // !!! DB in/output code must be written inside server component only. (user can read in client component)
        await db.collection('post').updateOne(
            {postNo : req.postNo},
            {$set : { category : req.category,
                      title : req.title,
                      subTitle : req.subTitle,
                      date : req.date,
                      context : req.context,
                      tag : req.tag,
                      colour : req.colour
             }}
        );

        return NextResponse.json({
            message: "Success!"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Database operation failed:", error);
        return NextResponse.json({
        message: "Internal Server Error"
        }, {
        status: 500
        });
    }
}

// // !!!NOT necessary as clientside checkes empty string, but wrote it just incase.
// function checkInputError(json: JSON) {
//     const requiredFields = ["title", "subTitle", "date", "context"];
//     for (const field of requiredFields) {
//         if (!json[field] || json[field].trim() === "") {
//         return NextResponse.json({
//             message: `${field} is required and cannot be empty.`
//         }, {
//             status: 400
//         });
//         }
//     }
    
//     return null;    // Return null if all validations pass
// }