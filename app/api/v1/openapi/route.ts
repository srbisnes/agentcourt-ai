import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    openapi: '3.1.0',
    info: { title: 'AgentCourt AI Demo API', version: '0.1.0' },
    paths: {
      '/api/v1/health': { get: { responses: { 200: { description: 'Service health' } } } },
      '/api/v1/cases': {
        get: { responses: { 200: { description: 'Demo case list' } } },
        post: { responses: { 202: { description: 'Demo case accepted' }, 400: { description: 'Title required' } } },
      },
    },
  });
}
