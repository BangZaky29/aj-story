// =========================================
// FILE: src/utils/helpers.js
// =========================================

export const getErrorMessage = (error) => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.message) {
    return error.message;
  }
  return 'Terjadi kesalahan. Silakan coba lagi.';
};
