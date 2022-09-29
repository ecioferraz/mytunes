import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextCard, TextInput } from '../../components';
import { IUserInfo } from '../../interfaces';
import { readUser, saveUser } from '../../services/localStorage';
import { USER_INITIAL_STATE } from '../../utils/constants';
import validateLoginSchema from '../../validations/validateUserSchema';

import './styles.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoginValid, setIsLoginValid] = useState<boolean>(
    readUser() ? true : false
  );
  const [loginInfo, setLoginInfo] = useState<IUserInfo>(USER_INITIAL_STATE);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (await validateLoginSchema(loginInfo, setError)) {
      saveUser(loginInfo);
      setIsLoginValid(true);
    }
  };

  useEffect(() => {
    if (isLoginValid) navigate('/search');
  }, [isLoginValid]);

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <TextCard as='h1' className='login-title' text='myTunes' />
      {error && <TextCard as='p' className='error-message' text={error} />}
      <div className='input-container'>
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
          placeholder='Senha'
          type='password'
          value={loginInfo.password}
          minLength='6'
        />
      </div>
      <Button
        className='login-btn'
        name='Entrar'
        type='submit'
        disabled={!loginInfo.email || !loginInfo.password}
      />
    </form>
  );
}
