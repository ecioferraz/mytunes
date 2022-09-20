import { IUserInfo } from '../interfaces';

const USER_KEY = 'mytunes_user';

const readUser = () => JSON.parse(localStorage.getItem(USER_KEY) as string);
const removeUser = () => localStorage.removeItem(USER_KEY);
const saveUser = (userInfo: IUserInfo) => {
  const { password, ...user } = userInfo;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export { readUser, removeUser, saveUser };
