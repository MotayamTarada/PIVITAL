import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>PIVITAL GmbH</h3>
            <p style={{ color: '#94a3b8', marginBottom: '1rem', whiteSpace: 'pre-line' }}>
              {t.footer.address}
            </p>
            <p style={{ color: '#94a3b8' }}>
              +49 178 6361132<br />
              Info@pivital.eu
            </p>
          </div>

          <div className="footer-col">
            <h3>{t.nav.services}</h3>
            <ul>
              <li><a href="#services">{t.services.subtitle.split(' ')[0]} {t.services.title}</a></li>
              <li><a href="#services">{t.hero.title.split('\n')[1].split('&')[0]}</a></li>
              <li><a href="#services">{t.ai.title}</a></li>
              <li><a href="#products">{t.products.title}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t.footer.legal}</h3>
            <ul>
              <li><Link to="/imprint">Imprint</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/data-protection">Data Protection Notice</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PIVITAL GmbH. {t.footer.rights}</p>
          <div className="social-links">
            {/* Add Social Icons if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
