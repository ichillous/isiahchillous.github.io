import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed-top bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Primary">
        <div className="container">
          <a className="navbar-brand" href="#home">IC</a>
          <button 
            className="navbar-toggler" 
            type="button"
            aria-controls="primary-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
          <div id="primary-menu" className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link"
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
