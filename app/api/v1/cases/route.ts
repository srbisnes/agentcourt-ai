import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ready', mode: 'demo', persistent: false, cases: [] });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (typeof body?.title !== 'string' || !body.title.trim()) {
    return NextResponse.json({ error: 'title is required' }, { status: 400 });
  }
  return NextResponse.json(
    { status: 'accepted', mode: 'demo', persistent: false, case: { id: `demo-${Date.now()}`, title: body.title.trim() } },
    { status: 202 },
  );
}
