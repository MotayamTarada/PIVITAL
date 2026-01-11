import { Link } from 'react-router-dom';
import { Menu, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="PIVITAL" />
        </Link>

        <ul className="nav-links">
          <li><a href="#home" className="nav-link">{t.nav.home}</a></li>
          <li><a href="#about" className="nav-link">{t.nav.about}</a></li>
          <li><a href="#services" className="nav-link">{t.nav.services}</a></li>
          <li><a href="#products" className="nav-link">{t.nav.products}</a></li>
          <li><a href="#methodology" className="nav-link">{t.nav.methodology}</a></li>
        </ul>

        <div className="nav-actions">
          <button
            className="lang-btn"
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            <Globe size={20} />
            {language.toUpperCase()}
          </button>
          <a href="#contact" className="btn btn-primary">{t.nav.contact}</a>
          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
