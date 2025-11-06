'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregar = async () => {
    try {
      const res = await axios.get('/api/filmes');
      setFilmes(res.data);
    } catch (e) {
      console.error('Erro ao carregar filmes:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { carregar(); }, []);

  if (loading) {
    return (
      <div className="main-container text-center">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">📋 Lista de Filmes</h2>
        </div>
        <div className="card-body p-0">
          {filmes.length === 0 ? (
            <div className="text-center py-5">
              <h4>Nenhum filme cadastrado</h4>
              <Link href="/filmes/criar" className="btn btn-primary mt-3">Adicionar Primeiro Filme</Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Gênero</th>
                    <th>Ano</th>
                    <th className="text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filmes.map(f => (
                    <tr key={f.id}>
                      <td>{f.id}</td>
                      <td className="fw-bold">{f.nome}</td>
                      <td><span className="badge bg-info text-dark">{f.genero}</span></td>
                      <td>{f.ano}</td>
                      <td className="text-center">
                        <Link href={`/filmes/editar/${f.id}`} className="btn btn-warning btn-sm me-2">✏️ Editar</Link>
                        <Link href={`/filmes/deletar/${f.id}`} className="btn btn-danger btn-sm">🗑️ Deletar</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
