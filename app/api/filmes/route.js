import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
const BASE = process.env.MOCKAPI_BASE;

async function parseSafe(res) {
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return await res.json();
  const text = await res.text();
  try { return JSON.parse(text); } catch { return { message: text }; }
}

export async function GET(req) {
  const url = new URL(req.url);
  const qs = url.search || '';
  const r = await fetch(`${BASE}/filmes${qs}`, { cache: 'no-store' });
  const data = await parseSafe(r);
  return NextResponse.json(data, { status: r.status });
}

export async function POST(req) {
  const body = await req.json();

  if (!body.nome || !body.genero || !body.ano) {
    return NextResponse.json(
      { message: 'Preencha todos os campos obrigatórios.' },
      { status: 400 }
    );
  }

  const r = await fetch(`${BASE}/filmes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  const data = await parseSafe(r);
  return NextResponse.json(data, { status: r.status });
}
