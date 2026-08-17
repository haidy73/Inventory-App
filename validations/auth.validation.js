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

const validateLoginInput = ({ email, password }) => {
  const errors = [];

  if (!email || email.trim().length === 0) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address');
  }

  if (!password || password.trim().length === 0) {
    errors.push('Password is required');
  }

  return errors;
};

module.exports = { 
  validateRegisterInput,
  validateLoginInput 
};