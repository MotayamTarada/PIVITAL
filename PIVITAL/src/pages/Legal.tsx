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

export const Imprint = () => (
    <LegalLayout title="Legal Notice (Imprint)">
        <p><strong>Status:</strong> 01 September 2025</p>
        <p>This legal notice applies to the website www.pivital.de as well as to the PIVITAL pages on LinkedIn, YouTube, Facebook, X, Xing, Instagram, and TikTok.</p>

        <h2>Legal Notice</h2>
        <p>
            PIVITAL GmbH<br />
            Westbahnhof 5<br />
            38118 Braunschweig<br />
            Germany
        </p>
        <p>
            Commercial Register: HRB 211896<br />
            Register Court: Braunschweig District Court<br />
            Represented by: Mustafa Salah
        </p>

        <h2>Contact</h2>
        <p>
            Phone: +49 (0) 178 6361132<br />
            Email: info@pivital.de
        </p>

        <h2>VAT Identification Number</h2>
        <p>VAT identification number in accordance with § 27a of the German Value Added Tax Act: DE450543365</p>

        <h2>Supervisory Authority</h2>
        <p>Federal Employment Agency (Bundesagentur für Arbeit)<br />Adolf-Westphal-Straße 2, 24143 Kiel, Germany</p>

        <h2>EU Online Dispute Resolution</h2>
        <p>The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/</p>

        <h2>Central Contact Point under the Digital Services Act</h2>
        <p>Email: info@pivital.de</p>
    </LegalLayout>
);

export const Privacy = () => (
    <LegalLayout title="Privacy Policy – Summary">
        <p><strong>Overview</strong><br />This website processes personal data when you visit or interact with it. Personal data includes any information that can identify you directly or indirectly.</p>

        <h2>Data Controller</h2>
        <p>PIVITAL GmbH<br />Westbahnhof 5, 38118 Braunschweig, Germany<br />Email: info@pivital.de</p>

        <h2>Data Collection</h2>
        <ul>
            <li>Data you provide: Contact forms, email, phone, applications.</li>
            <li>Automatically collected data: IP address, browser type, log files.</li>
        </ul>

        <h2>Purpose of Processing</h2>
        <ul>
            <li>Operation of website</li>
            <li>Communication & Inquiries</li>
            <li>Contract fulfillment</li>
            <li>Recruitment</li>
        </ul>

        <h2>Legal Bases</h2>
        <p>Consent (Art. 6(1)(a) GDPR), Contract (Art. 6(1)(b)), Legal obligations (Art. 6(1)(c)), Legitimate interests (Art. 6(1)(f)).</p>

        <h2>Hosting</h2>
        <p>Hostinger International Ltd. (Cyprus). Data transfers rely on EU SCCs.</p>

        <h2>User Rights</h2>
        <p>You have the right to access, rectification, deletion, restriction, portability, and withdrawal of consent.</p>
    </LegalLayout>
);

export const Terms = () => (
    <LegalLayout title="Terms of Use">
        <p><strong>Status:</strong> 21 October 2025</p>
        <h2>1 – Information Services</h2>
        <p>The website of PIVITAL allows visitors to view services, job vacancies, and apply online.</p>

        <h2>2 – Use of the Website</h2>
        <p>Use is free of charge. PIVITAL reserves the right to change content at any time.</p>

        <h2>3 – User Registration</h2>
        <p>Registration requires acceptance of these Terms. Accounts allow application forwarding to partners.</p>

        <h2>4 – Password Protection</h2>
        <p>Users must keep passwords confidential and secure.</p>

        <h2>5 – User Obligations</h2>
        <p>Users warrant they hold necessary rights to content provided and will not use the site for unlawful purposes.</p>

        <h2>6 – Liability</h2>
        <p>Users are liable for damages caused by breach of obligations.</p>
    </LegalLayout>
);

export const DataProtection = () => (
    <LegalLayout title="Data Protection Notice">
        <p>PIVITAL uses automated systems to match your applicant profile with available job vacancies (“matching”). Before your applicant profile is used to train our automated systems, it is anonymized or pseudonymized.</p>
        <p>PIVITAL may use my applicant profile for training purposes. You may withdraw this consent at any time by contacting info@pivital.de.</p>
        <h2>Legal References</h2>
        <p>GDPR Art. 4, 6, 22.</p>
    </LegalLayout>
);
