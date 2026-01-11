import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
    const { language } = useLanguage();

    const siteTitle = "PIVITAL GmbH";
    const defaultDescription = language === 'en'
        ? "Your Partner for IT Solutions, Software Development & Talent Services in Germany."
        : "Ihr Partner für IT-Lösungen, Softwareentwicklung & Talent Services in Deutschland.";

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image || "https://pivital.de/og-image.jpg"; // Placeholder
    const metaUrl = url || "https://pivital.de";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <html lang={language} />
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:locale" content={language === 'en' ? 'en_US' : 'de_DE'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            {/* Canonical */}
            <link rel="canonical" href={metaUrl} />
        </Helmet>
    );
};

export default SEO;
