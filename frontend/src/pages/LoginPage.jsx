// =========================================
// FILE: src/pages/LoginPage.jsx
// Example usage of LoginForm
// =========================================

import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import '../styles/Style_forWebsite/Auth.css';
import '../styles/Style_forMobile/Auth.mobile.css';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Selamat Datang Kembali</h2>
          <p>Masuk ke akun Anda untuk melanjutkan</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
