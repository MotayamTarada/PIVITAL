import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './RequestAuditForm.css';

const RequestAuditForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        role: '',
        email: '',
        market: '',
        scaling: '',
        bottleneck: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct mailto link
        const subject = `Audit Request: ${formData.company}`;
        const body = `
Name: ${formData.fullName}
Company: ${formData.company}
Role: ${formData.role}
Email: ${formData.email}
Market: ${formData.market}

Scaling:
${formData.scaling}

Bottleneck:
${formData.bottleneck}
        `;

        window.location.href = `mailto:info@pivitaltech.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="audit-form-container">
            <h2>{t.auditForm.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">{t.auditForm.fullName}</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-input"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="company">{t.auditForm.company}</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="role">{t.auditForm.role}</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        className="form-input"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">{t.auditForm.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="market">{t.auditForm.market}</label>
                    <select
                        id="market"
                        name="market"
                        className="form-input form-select"
                        value={formData.market}
                        onChange={handleChange}
                    >
                        <option value="">{t.auditForm.selectMarket}</option>
                        <option value="Germany">Germany</option>
                        <option value="EU">EU</option>
                        <option value="USA/Canada">USA and Canada</option>
                        <option value="GCC">GCC</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="scaling">{t.auditForm.scaling}</label>
                    <textarea
                        id="scaling"
                        name="scaling"
                        className="form-input form-textarea"
                        value={formData.scaling}
                        onChange={handleChange}
                        rows={3}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bottleneck">{t.auditForm.bottleneck}</label>
                    <textarea
                        id="bottleneck"
                        name="bottleneck"
                        className="form-input form-textarea"
                        value={formData.bottleneck}
                        onChange={handleChange}
                        rows={3}
                    />
                </div>

                <button type="submit" className="submit-btn form-submit-btn">
                    {t.auditForm.submit}
                </button>
                <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>
                    {t.auditForm.contactEmailText}
                </p>
            </form>
        </div>
    );
};

export default RequestAuditForm;
