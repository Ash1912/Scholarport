// src/app/api/counselor/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function POST(req: NextRequest) {
  const { studentProfile } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-4-turbo",
    messages: [
      { role: "system", content: "You are a study abroad expert." },
      { role: "user", content: `Suggest courses based on: ${JSON.stringify(studentProfile)}` },
    ],
  });

  return NextResponse.json(response.data.choices[0].message);
}
