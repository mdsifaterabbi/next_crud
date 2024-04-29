import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({
    message: `Topic updated for id: ${id}`,
    status: 200,
  });
}

export async function PATCH(req, { params }) {
  const { id } = params; // Assuming you get the topic ID from the URL query parameter
  const { newTitle: title, newDescription: description } = await req.json();

  const existingTopic = await Topic.findById(id);

  // Update only the fields that are provided in the request
  if (title) {
    existingTopic.title = title;
  }
  if (description) {
    existingTopic.description = description;
  }

  // Save the updated topic
  await existingTopic.save();

  return NextResponse.json({
    message: `Topic updated for id: ${id}`,
    status: 200,
  });
}

// get e single topic based on id
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();

  const topic = await Topic.findOne({ _id: id });

  return NextResponse.json({
    message: `Your specific topic for id: ${id}`,
    topic,
    status: 200,
  });
}
