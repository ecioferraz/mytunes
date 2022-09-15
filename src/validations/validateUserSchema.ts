import { Dispatch } from 'react';
import { IUserInfo } from '../interfaces';
import { userSchema } from '../schemas';

const ERROR_START = 17;

const validateUserSchema = async (
  userInfo: IUserInfo,
  setError: Dispatch<React.SetStateAction<string>>
) =>
  userSchema
    .validate(userInfo)
    .catch((error) => setError(error.toString().substring(ERROR_START)));

export default validateUserSchema;
