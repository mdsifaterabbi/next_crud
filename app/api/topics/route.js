import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });

  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ message: "All Topics", topics, status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  const deletedTopic = await Topic.findByIdAndDelete(id);

  return NextResponse.json({
    message: `Topic deleted for id: ${id}`,
    deletedTopic,
    status: 200,
  });
}
