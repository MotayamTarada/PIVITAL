import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`navbar ${isOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="PIVITAL" />
        </Link>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">{t.nav.home}</Link></li>
          <li><Link to="/companies" className="nav-link">{t.nav.companies}</Link></li>
          <li><Link to="/applicants" className="nav-link">{t.nav.applicants}</Link></li>
          <li><a href="/#products" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.products}</a></li>
          {isOpen && (
            <>
              <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.contact}</a></li>
              <li>
                <button
                  className="lang-btn-mobile"
                  onClick={() => {
                    setLanguage(language === 'en' ? 'de' : 'en');
                    setIsOpen(false);
                  }}
                >
                  <Globe size={20} />
                  {language === 'en' ? 'Switch to German' : 'Auf Englisch umstellen'}
                </button>
              </li>
            </>
          )}
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
          <a href="#contact" className="btn btn-primary nav-cta">{t.nav.contact}</a>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
