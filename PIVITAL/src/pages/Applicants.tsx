import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Applicants = () => {
    const { t } = useLanguage();
    const data = t.applicants;

    return (
        <div className="container section">
            <SEO title={data.title} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="heading-lg">{data.title}</h1>
                <p className="text-lg mb-4">{data.intro}</p>
                <p className="text-lg mb-8">{data.intro2}</p>

                <div className="card-grid mb-8">
                    <div className="card">
                        <h3 className="heading-md mb-4">{data.expect.title}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {data.expect.items.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.25rem' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <h3 className="heading-md mb-4">{data.lookingFor.title}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {data.lookingFor.items.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.25rem' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="section-bg text-center" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid var(--border)' }}>
                    <p className="text-lg mb-6">{data.cta}</p>
                    <Link to="/apply" className="btn btn-primary" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        Join Our Network
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Applicants;
