import User from "@/app/models/userModel";
import connectMongoDB from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectMongoDB()
    const {email} = await request.json();
    const user = await User.findOne({email}).select("_id")
    return NextResponse.json({ user })
  } catch (error) {
    console.log(error)
  }
}