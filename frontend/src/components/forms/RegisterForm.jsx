// =========================================
// FILE: src/components/forms/RegisterForm.jsx
// =========================================

import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Check, X } from 'lucide-react';
import { validateForm, validatePhone, checkPasswordStrength } from '../../utils/validation';
import { getErrorMessage } from '../../utils/helpers';
import Button from '../common/Button';
import '../../styles/Style_forWebsite/Auth.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ strength: 0, label: '', color: '', checks: {} });
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.password) {
      const strength = checkPasswordStrength(formData.password);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength({ strength: 0, label: '', color: '', checks: {} });
    }
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData, ['name', 'email', 'phone', 'password']);
    
    if (!validatePhone(formData.phone)) {
      validationErrors.phone = 'Nomor telepon tidak valid';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Password tidak cocok';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call - replace with actual useAuth hook
      // const response = await register(formData.name, formData.email, formData.phone, formData.password);
      
      // Temporary simulation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success and navigate
      setTimeout(() => {
        navigate('/verify-otp', { state: { email: formData.email } });
      }, 500);
    } catch (error) {
      setErrors({ general: getErrorMessage(error) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form animate-slide-up">
      {/* Trial Info Banner */}
      <div className="trial-banner animate-fade-in">
        <div className="trial-content">
          <span className="trial-icon">🎁</span>
          <div className="trial-text">
            <p className="trial-title">Bonus Trial 3 Hari!</p>
            <p className="trial-subtitle">Dapatkan akses gratis semua fitur premium</p>
          </div>
        </div>
      </div>

      {errors.general && (
        <div className="error-alert animate-shake">
          <span className="error-icon">⚠️</span>
          <span>{errors.general}</span>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">
          <User className="label-icon" />
          Nama Lengkap
        </label>
        <div className="input-wrapper">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            disabled={loading}
            className={errors.name ? 'input-error' : ''}
          />
        </div>
        {errors.name && (
          <span className="error-text animate-fade-in">{errors.name}</span>
        )}
      </div>

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
        <label htmlFor="phone">
          <Phone className="label-icon" />
          Nomor WhatsApp
        </label>
        <div className="input-wrapper">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="08123456789"
            disabled={loading}
            className={errors.phone ? 'input-error' : ''}
          />
        </div>
        {errors.phone && (
          <span className="error-text animate-fade-in">{errors.phone}</span>
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

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="password-strength animate-fade-in">
            <div className="strength-bar-container">
              <div 
                className="strength-bar" 
                style={{ 
                  width: `${passwordStrength.strength}%`,
                  backgroundColor: passwordStrength.color 
                }}
              />
            </div>
            <span className="strength-label" style={{ color: passwordStrength.color }}>
              {passwordStrength.label}
            </span>
          </div>
        )}

        {/* Password Requirements */}
        {formData.password && (
          <div className="password-requirements animate-fade-in">
            <p className="requirements-title">Ketentuan Password:</p>
            <ul className="requirements-list">
              <li className={passwordStrength.checks?.length ? 'requirement-met' : 'requirement-unmet'}>
                {passwordStrength.checks?.length ? (
                  <Check className="requirement-icon" />
                ) : (
                  <X className="requirement-icon" />
                )}
                Minimal 8 karakter
              </li>
              <li className={passwordStrength.checks?.uppercase ? 'requirement-met' : 'requirement-unmet'}>
                {passwordStrength.checks?.uppercase ? (
                  <Check className="requirement-icon" />
                ) : (
                  <X className="requirement-icon" />
                )}
                Huruf besar (A-Z)
              </li>
              <li className={passwordStrength.checks?.lowercase ? 'requirement-met' : 'requirement-unmet'}>
                {passwordStrength.checks?.lowercase ? (
                  <Check className="requirement-icon" />
                ) : (
                  <X className="requirement-icon" />
                )}
                Huruf kecil (a-z)
              </li>
              <li className={passwordStrength.checks?.number ? 'requirement-met' : 'requirement-unmet'}>
                {passwordStrength.checks?.number ? (
                  <Check className="requirement-icon" />
                ) : (
                  <X className="requirement-icon" />
                )}
                Angka (0-9)
              </li>
              <li className={passwordStrength.checks?.special ? 'requirement-met' : 'requirement-unmet'}>
                {passwordStrength.checks?.special ? (
                  <Check className="requirement-icon" />
                ) : (
                  <X className="requirement-icon" />
                )}
                Karakter khusus (!@#$%^&*)
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">
          <Lock className="label-icon" />
          Konfirmasi Password
        </label>
        <div className="input-wrapper password-wrapper">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            disabled={loading}
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            tabIndex="-1"
          >
            {showConfirmPassword ? (
              <EyeOff className="icon" />
            ) : (
              <Eye className="icon" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="error-text animate-fade-in">{errors.confirmPassword}</span>
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
            Daftar & Aktifkan Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <div className="auth-footer">
        <p>Sudah punya akun?</p>
        <Link to="/login" className="auth-link">
          Login sekarang
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
