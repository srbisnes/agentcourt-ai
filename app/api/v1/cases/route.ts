import { NextResponse } from 'next/server';
import { DEMO_CASES } from '@/lib/demo-cases';

/**
 * Demo case API — non-persistent.
 * GET returns seeded demo cases for the public UI.
 * POST accepts a title and returns 202 without storing the case.
 */
export async function GET() {
  return NextResponse.json({
    status: 'ready',
    mode: 'demo',
    persistent: false,
    note: 'Seeded demo cases only. POST does not persist.',
    cases: DEMO_CASES.map(({ id, title, status, confidence }) => ({
      id,
      title,
      status,
      confidence,
    })),
  });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (typeof body?.title !== 'string' || !body.title.trim()) {
    return NextResponse.json({ error: 'title is required' }, { status: 400 });
  }

  const title = body.title.trim().slice(0, 200);
  return NextResponse.json(
    {
      status: 'accepted',
      mode: 'demo',
      persistent: false,
      note: 'Case accepted for demo only. Not stored. No evidence pipeline ran.',
      case: {
        id: `demo-${Date.now()}`,
        title,
        status: 'ACTIVE',
        confidence: null,
      },
    },
    { status: 202 },
  );
}
