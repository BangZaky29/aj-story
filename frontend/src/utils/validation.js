// =========================================
// FILE: src/utils/validation.js
// =========================================

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validatePhone = (phone) => {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
  return phoneRegex.test(phone);
};

export const validateForm = (formData, fields) => {
  const errors = {};

  fields.forEach((field) => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} wajib diisi`;
    } else if (field === 'email' && !validateEmail(formData[field])) {
      errors[field] = 'Format email tidak valid';
    } else if (field === 'password' && !validatePassword(formData[field])) {
      errors[field] = 'Password minimal 8 karakter';
    }
  });

  return errors;
};

// Password strength checker
export const checkPasswordStrength = (password) => {
  if (!password) return { strength: 0, label: '', color: '' };

  let strength = 0;
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // Calculate strength
  if (checks.length) strength += 20;
  if (checks.uppercase) strength += 20;
  if (checks.lowercase) strength += 20;
  if (checks.number) strength += 20;
  if (checks.special) strength += 20;

  // Determine label and color
  let label = '';
  let color = '';

  if (strength <= 40) {
    label = 'Lemah';
    color = '#ef4444'; // red
  } else if (strength <= 60) {
    label = 'Lumayan';
    color = '#f59e0b'; // yellow/orange
  } else {
    label = 'Kuat';
    color = '#10b981'; // green
  }

  return { strength, label, color, checks };
};
