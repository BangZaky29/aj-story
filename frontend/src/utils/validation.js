/**
 * Validation utility functions
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {boolean} - True if valid (at least 8 characters)
 */
export const validatePassword = (password) => {
  return password && password.length >= 8;
};

/**
 * Validate phone number (Indonesian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
};

/**
 * Validate required field
 * @param {string} value - Value to validate
 * @returns {boolean} - True if not empty
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validate form with multiple fields
 * @param {Object} formData - Form data object
 * @param {Array} requiredFields - Array of required field names
 * @returns {Object} - Object with field names as keys and error messages as values
 */
export const validateForm = (formData, requiredFields = []) => {
  const errors = {};

  requiredFields.forEach((field) => {
    if (!validateRequired(formData[field])) {
      errors[field] = 'Field ini wajib diisi';
    }
  });

  // Specific field validations
  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Format email tidak valid';
  }

  if (formData.password && !validatePassword(formData.password)) {
    errors.password = 'Password minimal 8 karakter';
  }

  return errors;
};
