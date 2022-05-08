// @flow

import type { AuthResponse } from "../models";

export const makeSignUpRequest = async (fullname: string, email: string, password: string, confirmPassword: string): Promise<AuthResponse> => {
  const requestSuccessful = true;
  const accountCreated = true;

  if (requestSuccessful) {
    if (accountCreated) {
      return { fullname: 'Test User', email: 'test@test.com', authToken: 'test123' };
    }
  
    return { message: 'Unable to create account.' };  
  }

  return { message: 'Please check your internet connection.' };
};
