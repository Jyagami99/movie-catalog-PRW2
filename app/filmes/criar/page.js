'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function CriarFilme() {
  const router = useRouter();
  const [form, setForm] = useState({ nome: '', genero: '', ano: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.genero || !form.ano) return;

    setLoading(true);
    try {
      await axios.post('/api/filmes', form);
      alert('Filme criado com sucesso!');
      router.push('/filmes/listar');
    } catch (e) {
      console.error('Erro ao criar filme:', e);
      alert('Erro ao criar filme!');
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="card">
        <div className="card-header bg-success text-white"><h2 className="mb-0">➕ Criar Novo Filme</h2></div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nome do Filme *</label>
              <input name="nome" className="form-control" value={form.nome} onChange={onChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Gênero *</label>
              <select name="genero" className="form-select" value={form.genero} onChange={onChange} required>
                <option value="">Selecione um gênero</option>
                <option>Ação</option><option>Aventura</option><option>Comédia</option>
                <option>Drama</option><option>Ficção Científica</option><option>Horror</option>
                <option>Romance</option><option>Suspense</option><option>Crime</option><option>Animação</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Ano *</label>
              <input name="ano" className="form-control" maxLength={4} value={form.ano} onChange={onChange} required />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success" disabled={loading || !form.nome || !form.genero || !form.ano}>
                {loading ? 'Criando...' : '💾 Criar Filme'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => router.push('/filmes/listar')} disabled={loading}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
