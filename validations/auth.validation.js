const validateRegisterInput = ({ username, email, password }) => {
  const errors = [];

  if (!username || username.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Valid email is required');
  }

  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }

  return errors;
};

module.exports = { validateRegisterInput };