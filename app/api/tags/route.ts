import BlogTag from "@/app/model/BlogTag";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const tags = await BlogTag.find();
    return NextResponse.json({
        tags: tags.map((v) => v.name),
    });
}


