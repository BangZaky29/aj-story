/**
 * Calculate password strength and return detailed analysis
 * @param {string} password - The password to analyze
 * @returns {Object} - Contains score, strength level, percentage, color, and requirements
 */
export const calculatePasswordStrength = (password) => {
  if (!password) {
    return {
      score: 0,
      strength: 'none',
      percentage: 0,
      color: '#e5e7eb',
      label: '',
      requirements: {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
      },
    };
  }

  let score = 0;
  const requirements = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };

  // Calculate score based on requirements
  if (requirements.length) score += 20;
  if (requirements.uppercase) score += 20;
  if (requirements.lowercase) score += 20;
  if (requirements.number) score += 20;
  if (requirements.special) score += 20;

  // Bonus points for extra length
  if (password.length >= 12) score += 10;
  if (password.length >= 16) score += 10;

  // Cap score at 100
  score = Math.min(score, 100);

  // Determine strength level
  let strength, color, label;
  if (score < 40) {
    strength = 'weak';
    color = '#ef4444'; // red
    label = 'Lemah';
  } else if (score < 70) {
    strength = 'medium';
    color = '#f59e0b'; // yellow
    label = 'Lumayan';
  } else {
    strength = 'strong';
    color = '#10b981'; // green
    label = 'Kuat';
  }

  return {
    score,
    strength,
    percentage: score,
    color,
    label,
    requirements,
  };
};

/**
 * Get password requirement text with status
 * @param {Object} requirements - Requirements object from calculatePasswordStrength
 * @returns {Array} - Array of requirement objects with text and met status
 */
export const getPasswordRequirements = (requirements) => {
  return [
    { text: 'Minimal 8 karakter', met: requirements.length },
    { text: 'Huruf besar (A-Z)', met: requirements.uppercase },
    { text: 'Huruf kecil (a-z)', met: requirements.lowercase },
    { text: 'Angka (0-9)', met: requirements.number },
    { text: 'Karakter khusus (!@#$%...)', met: requirements.special },
  ];
};
