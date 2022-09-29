export const emptyFavsMock = {
  favorites: [],
  removeFavorite: () => {
    return;
  },
  saveFavorite: () => {
    return;
  },
};

export const songMock = {
  artistName: 'artist',
  kind: 'song',
  previewUrl: 'previewUrl',
  trackId: 0,
  trackName: 'trackName'
};

export const filledFavsMock = {
  favorites: [songMock],
  removeFavorite: () => {
    return;
  },
  saveFavorite: () => {
    return;
  },
};
