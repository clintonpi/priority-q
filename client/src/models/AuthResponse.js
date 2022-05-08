// @flow

export type AuthResponse = 
  | {| fullname: string, email: string, authToken: string |} 
  | {| message: string |};
