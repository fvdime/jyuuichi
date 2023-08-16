import connectMongoDB from "@/utils/mongo";
import Category from "@/app/models/categoryModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { category } = await request.json();

  await connectMongoDB();
  await Category.create({ category });
  return NextResponse.json({ message: "category created!" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const categories = await Category.find();
  return NextResponse.json({ categories });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Category.findByIdAndDelete(id);
  return NextResponse.json({ message: "Category deleted!" }, { status: 200 });
}
