import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import RequestAuditForm from '../components/RequestAuditForm';
import './Home.css';

const fadeIn = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

const OrbitAnimation = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-0">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-blue-500/10 rounded-full"
        />
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 border border-blue-500/15 rounded-full"
        />
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-40 border border-dashed border-blue-500/20 rounded-full"
        />
    </div>
);

const BackgroundBlobs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
        <motion.div
            animate={{
                x: [0, 100, -100, 0],
                y: [0, -150, 150, 0],
                scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(0, 138, 255, 0.25) 0%, transparent 70%)',
                filter: 'blur(80px)'
            }}
        />
        <motion.div
            animate={{
                x: [0, -150, 150, 0],
                y: [0, 100, -100, 0],
                scale: [1, 0.8, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(0, 86, 179, 0.2) 0%, transparent 70%)',
                filter: 'blur(100px)'
            }}
        />
        <motion.div
            animate={{
                x: [0, 50, -50, 0],
                y: [0, 50, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(0, 163, 255, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
            }}
        />
        <motion.div
            animate={{
                x: [0, 200, -200, 0],
                y: [0, -50, 50, 0],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(0, 68, 148, 0.15) 0%, transparent 70%)',
                filter: 'blur(90px)'
            }}
        />
    </div>
);

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section = ({ children, className = "", id = "" }: SectionProps) => (
    <motion.section
        id={id}
        className={`section ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
    >
        {children}
    </motion.section>
);

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="home">
            <SEO
                title={t.nav.home}
                description={t.hero.subtitle.replace(/\n/g, ' ')}
            />
            {/* Hero Section */}
            <section className="hero" id="home">
                <BackgroundBlobs />
                <OrbitAnimation />
                <div className="container relative z-10">
                    <motion.h1
                        className="gradient-text"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ whiteSpace: 'pre-line' }}
                    >
                        {t.hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {t.hero.subtitle}
                    </motion.p>
                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t.hero.cta} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </motion.a>
                </div>
            </section>

            {/* About Us */}
            <Section id="about">
                <div className="container">
                    <h2 className="heading-lg text-center mb-5">{t.about.title}</h2>
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-lg">
                            {t.about.text}
                        </p>
                    </div>
                </div>
            </Section>

            {/* For Companies */}
            <Section id="services" className="section-bg">
                <div className="container">
                    <h2 className="heading-lg mb-5">{t.services.title}</h2>
                    <p className="mb-5">{t.services.subtitle}</p>

                    <div className="card-grid">
                        <div className="card">
                            <Users className="mb-3 text-blue-600" size={32} />
                            <h3>{t.services.models.title}</h3>
                            <ul>
                                {t.services.models.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="card">
                            <Code className="mb-3 text-blue-600" size={32} />
                            <h3>{t.services.roles.title}</h3>
                            <ul>
                                {t.services.roles.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* What We Offer / Expertise */}
            <Section>
                <div className="container">
                    <h2 className="heading-lg mb-5">{t.expertise.title}</h2>
                    <div className="feature-list">
                        {t.expertise.items.map((item, i) => (
                            <div key={i} className="feature-item">
                                <CheckCircle size={20} className="check-icon" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* AI & Data */}
            <Section className="section-bg relative overflow-hidden">
                <BackgroundBlobs />
                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div>
                            <h2 className="heading-lg mb-4 gradient-text">{t.ai.title}</h2>
                            <p className="text-lg mb-4">
                                {t.ai.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mt-8">
                                <div>
                                    <h3 className="heading-md mb-3">{t.ai.services.title}</h3>
                                    <ul>
                                        {t.ai.services.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="heading-md mb-3">{t.ai.useCases.title}</h3>
                                    <ul>
                                        {t.ai.useCases.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Products */}
            <Section id="products" className="section-bg">
                <div className="container">
                    <h2 className="heading-lg mb-5 text-center">{t.products.title}</h2>
                    <div className="card-grid">

                        {/* EFS */}
                        <div className="card product-card">
                            <h3>{t.products.efs.title}</h3>
                            <p className="mb-3 text-sm">{t.products.efs.description}</p>
                            <ul>
                                {t.products.efs.features.slice(0, 4).map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        {/* Billing */}
                        <div className="card product-card">
                            <h3>{t.products.billing.title}</h3>
                            <p className="mb-3 text-sm">{t.products.billing.description}</p>
                            <ul>
                                {t.products.billing.features.slice(0, 4).map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        {/* ECM */}
                        <div className="card product-card">
                            <h3>{t.products.ecm.title}</h3>
                            <p className="mb-3 text-sm">{t.products.ecm.description}</p>
                            <ul>
                                {t.products.ecm.features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        {/* Mobile Solutions */}
                        <div className="card product-card">
                            <h3>{t.products.mobile.title}</h3>
                            <p className="mb-3 text-sm">{t.products.mobile.description}</p>
                            <ul>
                                {t.products.mobile.features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        {/* HRMS */}
                        <div className="card product-card">
                            <h3>{t.products.hrms.title}</h3>
                            <p className="mb-3 text-sm">{t.products.hrms.description}</p>
                            <ul>
                                {t.products.hrms.features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                    </div>
                </div>
            </Section>

            {/* Methodologies & Standards */}
            <Section id="methodology">
                <div className="container">
                    <div className="card-grid">
                        <div>
                            <h3 className="heading-md mb-3">{t.methodology.title}</h3>
                            <ul>
                                {t.methodology.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="heading-md mb-3">{t.quality.title}</h3>
                            <ul>
                                {t.quality.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="heading-md mb-3">{t.security.title}</h3>
                            <ul>
                                {t.security.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Tech Stack */}
            <Section className="section-bg">
                <div className="container text-center">
                    <h2 className="heading-lg mb-5">{t.tech.title}</h2>
                    <div className="tech-grid">
                        {t.tech.list.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Case Studies */}
            <Section>
                <div className="container">
                    <h2 className="heading-lg mb-5">{t.cases.title}</h2>
                    <div className="card-grid">
                        {t.cases.items.map((item, i) => (
                            <div key={i} className="case-study">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Clients */}
            <Section className="section-bg text-center">
                <div className="container">
                    <h2 className="heading-lg mb-5">{t.clients.title}</h2>
                    <div className="tech-grid">
                        {["Volkswagen AG", "Schnellecke", "Hays", "Start Bau UG", "Capgemini Engineering", "ISD Immobilien"].map(client => (
                            <span key={client} style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 1rem', color: '#64748b' }}>{client}</span>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Contact Section explicitly for ID referencing */}
            {/* Contact / Audit Form */}
            <Section id="contact" className="section" >
                <div className="container">
                    <RequestAuditForm />
                </div>
            </Section>
        </div>
    );
};

export default Home;
