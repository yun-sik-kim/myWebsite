import WriteForm from "@/app/wndlswkd/write/WriteForm";
import { connectDB } from "@/../util/database"

import { GET } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export default async function Write() {
    let session = await getServerSession(GET);
    if (!session) {  
        return notFound();
    }

    return (
        <WriteForm />
    );
}