import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Legal.css';
import SEO from '../components/SEO';

const LegalLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="container">
        <SEO title={title} />
        <div className="legal-page">
            <h1>{title}</h1>
            {children}
        </div>
    </div>
);

export const Imprint = () => {
    const { t, language } = useLanguage();
    return (
        <LegalLayout title={t.legal.imprint.title}>
            <p>{t.legal.imprint.status}</p>
            <p>{t.legal.imprint.intro}</p>

            <h2>{t.legal.imprint.sections.company}</h2>
            <p>
                PIVITAL GmbH<br />
                Westbahnhof 5<br />
                38118 Braunschweig<br />
                {language === 'de' ? 'Deutschland' : 'Germany'}
            </p>
            <p style={{ whiteSpace: 'pre-line' }}>{t.legal.imprint.sections.register}</p>

            <h2>{t.legal.imprint.sections.contact}</h2>
            <p>
                {language === 'de' ? 'Telefon' : 'Phone'}: +49 178 6361132<br />
                E-Mail: Info@pivital.eu
            </p>

            <h2>{t.legal.imprint.sections.vat}</h2>
            <p>{t.legal.imprint.sections.vatId}</p>

            <h2>{t.legal.imprint.sections.supervisory}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{t.legal.imprint.sections.supervisoryBody}</p>

            <h2>{t.legal.imprint.sections.dispute}</h2>
            <p>{t.legal.imprint.sections.disputeText}</p>

            <h2>{t.legal.imprint.sections.dsa}</h2>
            <p>E-Mail: Info@pivital.eu</p>
        </LegalLayout>
    );
};

export const Privacy = () => {
    const { t, language } = useLanguage();
    return (
        <LegalLayout title={t.legal.privacy.title}>
            <p dangerouslySetInnerHTML={{ __html: t.legal.privacy.overview }}></p>

            <h2>{t.legal.privacy.controller}</h2>
            <p>PIVITAL GmbH<br />Westbahnhof 5, 38118 Braunschweig, {language === 'de' ? 'Deutschland' : 'Germany'}<br />E-Mail: Info@pivital.eu</p>

            <h2>{t.legal.privacy.collection}</h2>
            <ul>
                {t.legal.privacy.collectionList.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <h2>{t.legal.privacy.purpose}</h2>
            <ul>
                {t.legal.privacy.purposeList.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <h2>{t.legal.privacy.bases}</h2>
            <p>{t.legal.privacy.basesText}</p>

            <h2>{t.legal.privacy.hosting}</h2>
            <p>{t.legal.privacy.hostingText}</p>

            <h2>{t.legal.privacy.rights}</h2>
            <p>{t.legal.privacy.rightsText}</p>
        </LegalLayout>
    );
};

export const Terms = () => {
    const { t } = useLanguage();
    return (
        <LegalLayout title={t.legal.terms.title}>
            <p>{t.legal.terms.status}</p>
            {t.legal.terms.sections.map((section, index) => (
                <div key={index}>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                </div>
            ))}
        </LegalLayout>
    );
};

export const DataProtection = () => {
    const { t } = useLanguage();
    return (
        <LegalLayout title={t.legal.dataProtection.title}>
            <p>{t.legal.dataProtection.text1}</p>
            <p>{t.legal.dataProtection.text2}</p>
            <h2>{t.legal.dataProtection.references.split(':')[0]}</h2>
            <p>{t.legal.dataProtection.references.split(':')[1]}</p>
        </LegalLayout>
    );
};
