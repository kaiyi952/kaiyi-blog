import { S3Client } from "@aws-sdk/client-s3";
export const S3endpoint = "https://f244d7415c54cb1aea1c88bf3e414fe0.r2.cloudflarestorage.com/blog-images"
const s3Client = new S3Client({
  region: "auto",
  endpoint: S3endpoint,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
  },
  forcePathStyle: true,
});

export default s3Client;