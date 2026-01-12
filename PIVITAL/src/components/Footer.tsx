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
            <p style={{ marginBottom: '1rem', whiteSpace: 'pre-line' }}>
              {t.footer.address}
            </p>
            <p>
              +49 178 6361132<br />
              info@pivitaltech.de
            </p>
          </div>

          <div className="footer-col">
            <h3>{t.nav.companies}</h3>
            <ul>
              <li><Link to="/companies">{t.nav.companies}</Link></li>
              <li><Link to="/applicants">{t.nav.applicants}</Link></li>
              <li><a href="/#products">{t.nav.products}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t.footer.legal}</h3>
            <ul>
              <li><Link to="/imprint">{t.footer.links.imprint}</Link></li>
              <li><Link to="/privacy">{t.footer.links.privacy}</Link></li>
              <li><Link to="/terms">{t.footer.links.terms}</Link></li>
              <li><Link to="/data-protection">{t.footer.links.dataProtection}</Link></li>
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
    </footer >
  );
};

export default Footer;
