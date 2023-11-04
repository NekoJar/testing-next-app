import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Jar" },
    { id: 2, name: "Jan" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
