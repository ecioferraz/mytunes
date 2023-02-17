import { Tracklist, UserInfo } from '../types';

const USER_KEY = 'mytunes_user';
const FAVORITE_SONGS_KEY = 'mytunes_favorites';

if (!JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY) as string)) {
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify([]));
}

const readUser = () => JSON.parse(localStorage.getItem(USER_KEY) as string);

const removeUser = () => localStorage.removeItem(USER_KEY);

const saveUser = (userInfo: UserInfo) => {
  const { password, ...user } = userInfo;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const readFavoriteSongs = () =>
  JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY) as string);

const saveFavoriteSongs = (favoriteSongs: Tracklist[]) =>
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs));

const addFavoriteSong = (favoriteSong: Tracklist) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs([...favoriteSongs, favoriteSong]);
};

const removeFavoriteSong = (favoriteSong: Tracklist) => {
  const favoriteSongs = readFavoriteSongs();
  saveFavoriteSongs(
    favoriteSongs.filter(
      (song: Tracklist) => song.trackId !== favoriteSong.trackId,
    ),
  );
};

export {
  addFavoriteSong,
  readFavoriteSongs,
  removeFavoriteSong,
  readUser,
  removeUser,
  saveUser,
};
