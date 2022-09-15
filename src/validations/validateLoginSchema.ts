import { Dispatch } from 'react';
import { ILoginInfo } from '../interfaces';
import { loginSchema } from '../schemas';

const ERROR_START = 17;

const validateLoginSchema = async (
  loginInfo: ILoginInfo,
  setError: Dispatch<React.SetStateAction<string>>
) =>
  loginSchema
    .validate(loginInfo)
    .catch((error) => setError(error.toString().substring(ERROR_START)));

export default validateLoginSchema;
