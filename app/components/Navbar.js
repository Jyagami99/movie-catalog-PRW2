'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => (pathname === path ? 'active' : '');

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom mb-4">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">🎬 Catálogo de Filmes</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive('/')}`}>🏠 Início</Link>
            </li>
            <li className="nav-item">
              <Link href="/filmes/listar" className={`nav-link ${isActive('/filmes/listar')}`}>📋 Listar</Link>
            </li>
            <li className="nav-item">
              <Link href="/filmes/criar" className={`nav-link ${isActive('/filmes/criar')}`}>➕ Criar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
