import s3Client, { S3endpoint } from "@/libs/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { auth } from '@clerk/nextjs/server'

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${encodeURIComponent(file.name)}`;

    const command = new PutObjectCommand({
      Bucket: "blog-images",
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    });

    await s3Client.send(command);
    return NextResponse.json({ url: `${S3endpoint}/${fileName}` }, { status: 200 });
  } catch (error) {
    console.error("Image upload failed:", error);
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }
}