// =========================================
// FILE: src/components/forms/LoginForm.jsx
// =========================================

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { validateForm } from '../../utils/validation';
import Button from '../common/Button';
import '../../styles/Style_forWebsite/Auth.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setGeneralError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError('');

    // Validasi form
    const validationErrors = validateForm(formData, ['email', 'password']);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // Simulate API call - replace with actual useAuth hook
      // const res = await login(formData.email, formData.password);
      
      // Temporary simulation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate on success
      navigate('/profile');
    } catch (err) {
      const msg = err?.response?.data?.message ?? err.message ?? 'Terjadi kesalahan';
      setGeneralError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form animate-slide-up">
      {generalError && (
        <div className="error-alert animate-shake">
          <span className="error-icon">⚠️</span>
          <span>{generalError}</span>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="email">
          <Mail className="label-icon" />
          Email
        </label>
        <div className="input-wrapper">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            disabled={loading}
            className={errors.email ? 'input-error' : ''}
          />
        </div>
        {errors.email && (
          <span className="error-text animate-fade-in">{errors.email}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">
          <Lock className="label-icon" />
          Password
        </label>
        <div className="input-wrapper password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            disabled={loading}
            className={errors.password ? 'input-error' : ''}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex="-1"
          >
            {showPassword ? (
              <EyeOff className="icon" />
            ) : (
              <Eye className="icon" />
            )}
          </button>
        </div>
        {errors.password && (
          <span className="error-text animate-fade-in">{errors.password}</span>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full submit-button"
        loading={loading}
        disabled={loading}
      >
        {!loading && (
          <>
            Login
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <div className="auth-footer">
        <p>Belum punya akun?</p>
        <Link to="/register" className="auth-link">
          Daftar sekarang
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
