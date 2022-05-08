// @flow

import type { AuthResponse } from "../models";

export const setUpAuthResponse = (res: AuthResponse, navigate: any, setMessage: ((string => string) | string) => void) => {
  if (res.authToken) {
    localStorage.setItem('user', JSON.stringify(res));
    navigate('/q');
  } else if (res.message) {
    setMessage(res.message);
  }
};
