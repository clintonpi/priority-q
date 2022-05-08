// @flow

import PasswordValidator from 'password-validator';

export const passwordSchema: any = new PasswordValidator();

passwordSchema
  .is().min(8)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().symbols();
