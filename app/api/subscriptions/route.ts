import SubscribeEmail from "@/app/model/SubscribeEmail";
import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";

interface CreateEmailRequest {
  email: string;
}

export async function POST(req: NextRequest) {
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  try {
    const { email } = (await req.json()) as CreateEmailRequest;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    } else if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const existing = await SubscribeEmail.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 400 }
      );
    }
    const subscribeEmail = new SubscribeEmail({ email });
    await subscribeEmail.save();

    return NextResponse.json(
      { message: "New Subscriber Created" },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Error in subscribe API:", err);

    if (typeof err === "object" && err && "code" in err) {
      const mongoErr = err as { code: number; message: string; keyValue?: unknown };
      if (mongoErr.code === 11000) {
        return NextResponse.json(
          { message: "Email already subscribed" },
          { status: 400 }
        );
      }
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
