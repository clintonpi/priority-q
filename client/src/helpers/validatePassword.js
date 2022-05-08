// @flow

import { passwordSchema } from ".";

export const validatePassword = (password: string, confirmPassword: string, setMessage: ((string => string) | string) => void): boolean => {
  if (password.length < 8) {
    setMessage('Your password does not have up to 8 characters.');
    return false;
  }

  if (!passwordSchema.validate(password)) {
    setMessage('Your password does not contain the required characters.');
    return false;
  }

  if (password !== confirmPassword) {
    setMessage('Password and Confirm Password are different.');
    return false;
  }

  return true;
};
