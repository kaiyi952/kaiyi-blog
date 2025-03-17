import Blog from "@/app/model/Blog";
import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { auth } from '@clerk/nextjs/server'

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const id = (await params).id
    await connectMongoDB();
    await Blog.findByIdAndDelete(id)
    return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const id = (await params).id
    const { newTitle: title, newContent: content, newDescription: description, newTags: tags } = await req.json();
    await connectMongoDB();
    await Blog.findByIdAndUpdate(id, { title, content, description, tags })
    return NextResponse.json({ message: "Blog Updated" }, { status: 200 });
}

// export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
//     try {
//         const id = params.id;
//         await connectMongoDB();

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
//         }

//         const blog = await Blog.findById(id);

//         if (!blog) {
//             return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//         }

//         return NextResponse.json(blog, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching blog:", error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }