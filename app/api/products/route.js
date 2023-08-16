import connectMongoDB from "@/utils/mongo";
import Product from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, price } = await request.json();

  await connectMongoDB();
  await Product.create({ title, description, price });
  return NextResponse.json({ message: "product created!" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "product deleted!" }, { status: 200 });
}
