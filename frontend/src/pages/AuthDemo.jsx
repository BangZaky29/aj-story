// =========================================
// FILE: src/pages/AuthDemo.jsx
// Demo page showing both forms side by side (for testing)
// =========================================

import React, { useState } from 'react';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import '../styles/Style_forWebsite/Auth.css';
import '../styles/Style_forMobile/Auth.mobile.css';

const AuthDemo = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        {/* Tab Switcher */}
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          marginBottom: '30px',
          borderBottom: '2px solid #e5e7eb'
        }}>
          <button
            onClick={() => setActiveTab('login')}
            style={{
              flex: 1,
              padding: '12px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'login' ? '3px solid #3b82f6' : '3px solid transparent',
              color: activeTab === 'login' ? '#3b82f6' : '#6b7280',
              fontWeight: activeTab === 'login' ? '600' : '400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem'
            }}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            style={{
              flex: 1,
              padding: '12px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'register' ? '3px solid #3b82f6' : '3px solid transparent',
              color: activeTab === 'register' ? '#3b82f6' : '#6b7280',
              fontWeight: activeTab === 'register' ? '600' : '400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem'
            }}
          >
            Register
          </button>
        </div>

        {/* Form Content */}
        {activeTab === 'login' ? (
          <div key="login">
            <div className="auth-header">
              <h2>Selamat Datang Kembali</h2>
              <p>Masuk ke akun Anda untuk melanjutkan</p>
            </div>
            <LoginForm />
          </div>
        ) : (
          <div key="register">
            <div className="auth-header">
              <h2>Buat Akun Baru</h2>
              <p>Daftar sekarang dan dapatkan trial 3 hari gratis!</p>
            </div>
            <RegisterForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthDemo;
