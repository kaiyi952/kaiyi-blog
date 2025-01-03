import Blog from "@/app/model/Blog";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    const { title, content, description, tags } = await req.json();
    await connectMongoDB();
    await Blog.create({ title, content, description, tags });
    return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const blogs = await Blog.find()
    console.log(blogs)
    return NextResponse.json({ blogs })
}

