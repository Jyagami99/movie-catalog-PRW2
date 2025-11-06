'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

export default function DeletarFilme() {
  const { id } = useParams();
  const router = useRouter();
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregar = async () => {
      try {
        const res = await axios.get(`/api/filmes/${id}`);
        setFilme(res.data);
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

  const onDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`/api/filmes/${id}`);
      alert('Filme deletado com sucesso!');
      router.push('/filmes/listar');
    } catch (e) {
      console.error('Erro ao deletar filme:', e);
      alert('Erro ao deletar filme!');
      setLoading(false);
    }
  };

  if (loading || !filme) {
    return (
      <div className="main-container text-center">
        <div className="spinner-border text-light" role="status"><span className="visually-hidden">Carregando...</span></div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="card">
        <div className="card-header bg-danger text-white"><h2 className="mb-0">🗑️ Deletar Filme</h2></div>
        <div className="card-body">
          <div className="alert alert-danger">
            <h4 className="alert-heading">⚠️ Atenção!</h4>
            <p>Tem certeza que deseja deletar este filme? Esta ação não pode ser desfeita.</p>
          </div>

          <div className="card bg-light mb-4">
            <div className="card-body">
              <h5>Detalhes do Filme:</h5>
              <ul className="list-unstyled mb-0">
                <li><strong>ID:</strong> {filme.id}</li>
                <li><strong>Nome:</strong> {filme.nome}</li>
                <li><strong>Gênero:</strong> {filme.genero}</li>
                <li><strong>Ano:</strong> {filme.ano}</li>
              </ul>
            </div>
          </div>

          <div className="d-flex gap-2">
            <button onClick={onDelete} className="btn btn-danger">🗑️ Confirmar Exclusão</button>
            <button onClick={() => router.push('/filmes/listar')} className="btn btn-secondary">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
