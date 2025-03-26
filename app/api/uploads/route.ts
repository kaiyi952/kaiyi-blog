import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
export async function uploadImage(file: File): Promise<string> {
  const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
  const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
  const END_POINT = process.env.ENDPOINT;
  const domain = "https://assets.kaiyi.io";
  if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error("Missing AWS access keys in environment variables.");
  }
  const s3Client = new S3Client({
    region: "auto",
    endpoint: END_POINT,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
    forcePathStyle: true,
  });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}-${encodeURIComponent(file.name)}`;

  const command = new PutObjectCommand({
    Bucket: "blog-images",
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });

  try {
    await s3Client.send(command);
    return `${domain}/${fileName}`;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw new Error("Image upload failed.");
  }
}