import User from "@/app/models/userModel";
import connectMongoDB from "@/utils/mongo";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(request){
  try {
    const { username, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10)

    await connectMongoDB();
    await User.create({ username, email, password: hashedPassword});
    return NextResponse.json({ message: "user registered!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({message: "server error, please try again"}, {status: 500})
  }
}