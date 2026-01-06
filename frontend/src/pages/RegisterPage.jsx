// =========================================
// FILE: src/pages/RegisterPage.jsx
// Example usage of RegisterForm
// =========================================

import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import '../styles/Style_forWebsite/Auth.css';
import '../styles/Style_forMobile/Auth.mobile.css';

const RegisterPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Buat Akun Baru</h2>
          <p>Daftar sekarang dan dapatkan trial 3 hari gratis!</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
