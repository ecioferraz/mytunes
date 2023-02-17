import { Dispatch } from 'react';
import { UserInfo } from '../types';
import { userSchema } from '../schemas';

const ERROR_START = 17;

const validateUserSchema = async (
  userInfo: UserInfo,
  setError: Dispatch<React.SetStateAction<string>>,
) =>
  userSchema
    .validate(userInfo)
    .catch((error) => setError(error.toString().substring(ERROR_START)));

export default validateUserSchema;
