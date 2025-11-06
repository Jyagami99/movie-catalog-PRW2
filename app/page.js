import Link from 'next/link';

export default function Home() {
  return (
    <div className="main-container">
      <div className="card">
        <div className="card-body text-center py-5">
          <h1 className="display-4 mb-4">🎬 Bem-vindo ao Catálogo de Filmes</h1>
          <p className="lead mb-5">Sistema completo de gerenciamento de filmes com operações CRUD</p>

          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <h3>📋 Listar Filmes</h3>
                  <p className="text-muted">Visualize todos os filmes cadastrados</p>
                  <Link href="/filmes/listar" className="btn btn-primary">Acessar</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-success">
                <div className="card-body">
                  <h3>➕ Criar Filme</h3>
                  <p className="text-muted">Adicione novos filmes ao catálogo</p>
                  <Link href="/filmes/criar" className="btn btn-success">Acessar</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
