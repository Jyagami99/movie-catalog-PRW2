'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

export default function EditarFilme() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ nome: '', genero: '', ano: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await axios.get(`/api/filmes/${id}`);
        setForm({ nome: res.data.nome, genero: res.data.genero, ano: res.data.ano });
      } catch (e) {
        console.error('Erro ao carregar filme:', e);
        alert('Filme não encontrado!');
        router.push('/filmes/listar');
        return;
      } finally {
        setLoading(false);
      }
    };
    carregar();
  }, [id, router]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/filmes/${id}`, form);
      alert('Filme atualizado com sucesso!');
      router.push('/filmes/listar');
    } catch (e) {
      console.error('Erro ao atualizar filme:', e);
      alert('Erro ao atualizar filme!');
    }
  };

  if (loading) {
    return (
      <div className="main-container text-center">
        <div className="spinner-border text-light" role="status"><span className="visually-hidden">Carregando...</span></div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="card">
        <div className="card-header bg-warning"><h2 className="mb-0">✏️ Editar Filme</h2></div>
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
              <button type="submit" className="btn btn-warning" disabled={!form.nome || !form.genero || !form.ano}>
                💾 Salvar Alterações
              </button>
              <button type="button" onClick={() => router.push('/filmes/listar')} className="btn btn-secondary">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
