import connectMongoDB from "@/utils/mongo";
import Product from "@/app/models/productModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,

    newPrice: price,
  } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, { title, description, price });
  return NextResponse.json({ message: "product updated!" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
