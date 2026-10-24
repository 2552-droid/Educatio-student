import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "computer science";

  const apiKey = process.env.TEXTBOOK_API_KEY;
  const externalApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

  try {
    const res = await fetch(externalApiUrl);
    const data = await res.json();
    
    return NextResponse.json(data.items || []);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch textbooks" }, { status: 500 });
  }
}