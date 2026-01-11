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
        market: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Audit Requested:', formData);
        alert('Thank you! Your audit request has been received.');
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
                        <option value="IT">IT & Tech</option>
                        <option value="Finance">Finance</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Retail">Retail</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">
                    {t.auditForm.submit}
                </button>
            </form>
        </div>
    );
};

export default RequestAuditForm;
