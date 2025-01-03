import Blog from "@/app/model/Blog";
import Tag from "@/app/model/Tag";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse, NextRequest } from "next/server";

interface CreatePostRequest {
    title: string,
    content: string,
    description: string,
    tags: string[],
}

export async function POST(req: NextRequest) {
    const { title, content, description, tags } = (await req.json()) as CreatePostRequest;
    await connectMongoDB();
    await Blog.create({ title, content, description, tags });
    const existedTags = (await Tag.find({ name: { $in: tags } })).map((v) => v.name);
    await Tag.insertMany(
        tags
            .filter((v) => !existedTags.includes(v))
            .map((v) => ({ name: v }))
    );
    return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const blogs = await Blog.find()
    console.log(blogs)
    return NextResponse.json({ blogs })
}

