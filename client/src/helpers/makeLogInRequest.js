// @flow

import type { AuthResponse } from "../models";

export const makeLogInRequest = async (email: string, password: string): Promise<AuthResponse> => {
  const requestSuccessful = true;
  const loginSuccessful = true;

  if (requestSuccessful) {
    if (loginSuccessful) {
      return { fullname: 'Test User', email: 'test@test.com', authToken: 'test123' };
    }
  
    return { message: 'Unable to Log in.' };  
  }

  return { message: 'Please check your internet connection.' };
};
