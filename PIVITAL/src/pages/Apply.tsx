import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ApplyNow = () => {
    const { t } = useLanguage();
    const data = t.apply;

    return (
        <div className="container section">
            <SEO title={data.title} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="heading-lg text-center mb-6">{data.title}</h1>
                <p className="text-lg text-center mb-4">{data.intro}</p>
                <p className="text-lg text-center mb-12">{data.intro2}</p>

                <div className="card-grid mb-12">
                    <div className="card">
                        <h3 className="heading-md mb-6">{data.howItWorks.title}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {data.howItWorks.items.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '2rem',
                                        height: '2rem',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--accent)',
                                        color: 'black',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>
                                        {i + 1}
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="heading-md mb-6">{data.benefits.title}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {data.benefits.items.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <CheckCircle size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.25rem' }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <a
                        href={`mailto:info@pivitaltech.de?subject=Application - Talent Pool&body=Hello PIVITAL Team,%0D%0A%0D%0AI would like to join your talent network.%0D%0A%0D%0AMy Name: %0D%0AMy Role: %0D%0AMy Expertise: %0D%0AMy Location: %0D%0A%0D%0A[Please attach your CV/Profile to this email]`}
                        className="btn btn-primary"
                        style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}
                    >
                        {data.cta} <ArrowRight size={20} style={{ marginLeft: '1rem' }} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default ApplyNow;
