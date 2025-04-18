import Blog from "@/app/model/Blog";
import BlogTag from "@/app/model/BlogTag";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse, NextRequest } from "next/server";
import { auth } from '@clerk/nextjs/server'

interface CreatePostRequest {
    title: string,
    content: string,
    description: string,
    tags: string[],
}

export async function POST(req: NextRequest) {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { title, content, description, tags } = (await req.json()) as CreatePostRequest;
    await connectMongoDB();
    const blog = new Blog({ title, content, description, tags });
    await blog.save();
    const existedTags = (await BlogTag.find({ name: { $in: tags } })).map((v) => v.name);
    await BlogTag.insertMany(
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

// export async function handler(req: NextRequest) {
//     if (req.method === "GET") {
//         const searchParams = req.nextUrl.searchParams;
//         const tags = searchParams.get("tags");

//         try {
//             await connectMongoDB();

//             if (!tags) {
//                 const blogs = await Blog.find()
//                 return NextResponse.json({ blogs })
//             }
//             const tagList = tags.split(",");
//             const blogs = await Blog.find({ tags: { $in: tagList } });
//             return NextResponse.json({ blogs })
//         } catch (error) {
//             console.error("Error fetching blogs:", error);
//             return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
//         }
//     };


// };

