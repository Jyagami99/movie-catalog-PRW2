import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
const BASE = process.env.MOCKAPI_BASE;

async function parseSafe(res) {
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return await res.json();
  const text = await res.text();
  try { return JSON.parse(text); } catch { return { message: text }; }
}

export async function GET(_req, context) {
  if (!BASE) {
    return NextResponse.json({ error: 'MOCKAPI_BASE não definido' }, { status: 500 });
  }
  const { id } = await context.params;
  const r = await fetch(`${BASE}/filmes/${id}`, { cache: 'no-store' });
  const data = await parseSafe(r);
  return NextResponse.json(data, { status: r.status });
}

export async function PUT(req, context) {
  if (!BASE) {
    return NextResponse.json({ error: 'MOCKAPI_BASE não definido' }, { status: 500 });
  }
  const { id } = await context.params;
  const body = await req.json();
  const payload = {
    nome: body?.nome ?? '',
    genero: body?.genero ?? '',
    ano: body?.ano ?? '',
  };

  const r = await fetch(`${BASE}/filmes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify(payload),
  });
  const data = await parseSafe(r);
  return NextResponse.json(data, { status: r.status });
}

export async function DELETE(_req, context) {
  if (!BASE) {
    return NextResponse.json({ error: 'MOCKAPI_BASE não definido' }, { status: 500 });
  }
  const { id } = await context.params;
  const r = await fetch(`${BASE}/filmes/${id}`, { method: 'DELETE', cache: 'no-store' });
  const data = await parseSafe(r);
  return NextResponse.json(data, { status: r.status });
}
