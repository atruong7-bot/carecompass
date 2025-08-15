import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const lastMessage = data.messages[data.messages.length - 1];

  if (lastMessage.content && lastMessage.role == "user") {
    return NextResponse.json({ reply: lastMessage.content }, { status: 200 });
  }

  return NextResponse.json(
    { error: "No valid user message found " },
    { status: 400 }
  );
}
