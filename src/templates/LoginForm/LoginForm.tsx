import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextCard, TextInput } from '../../components';
import { ILoginInfo } from '../../interfaces';
import { loginSchema } from '../../schemas';
import { readUser, saveUser } from '../../services/localStorage';

const ERROR_START = 17;

export default function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoginValid, setIsLoginValid] = useState<boolean>(
    readUser() ? true : false
  );
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    email: '',
    password: '',
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const validateSchema = async () =>
    loginSchema
      .validate(loginInfo)
      .catch((error) => setError(error.toString().substring(ERROR_START)));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (await validateSchema()) {
      setIsLoginValid(true);
      saveUser(loginInfo);
    }
  };

  useEffect(() => {
    if (isLoginValid) navigate('/search');
  }, [isLoginValid]);

  return (
    <form onSubmit={handleSubmit}>
      <TextCard as='h1' className='login-title' text='myTunes' />
      <fieldset>
        <legend>Login</legend>
        <TextCard as='p' className='error-message' text={error} />
        <TextInput
          className='email-input'
          handleChange={handleChange}
          name='email'
          placeholder='email@email.com'
          type='email'
          value={loginInfo.email}
        />
        <TextInput
          className='password-input'
          handleChange={handleChange}
          name='password'
          placeholder='Password'
          type='password'
          value={loginInfo.password}
          minLength='6'
        />
      </fieldset>
      <Button
        className='login-btn'
        name='Login'
        type='submit'
        disabled={isLoginValid}
      />
      <Button
        className='register-btn'
        name='Cadastre-se'
        type='button'
        handleClick={() => navigate('/register')}
      />
    </form>
  );
}
