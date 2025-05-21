import { getAICounselingResponse } from '@/lib/openai';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const response = await getAICounselingResponse(prompt);
  return Response.json({ response });
}
