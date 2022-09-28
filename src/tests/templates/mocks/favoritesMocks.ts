export const emptyFavsMock = {
  favorites: [],
  removeFavorite: () => {
    return;
  },
  saveFavorite: () => {
    return;
  },
};

export const filledFavsMock = {
  favorites: [
    {
      artistName: 'artist',
      kind: 'song',
      previewUrl: 'previewUrl',
      trackId: 0,
      trackName: 'trackName'
    },
  ],
  removeFavorite: () => {
    return;
  },
  saveFavorite: () => {
    return;
  },
};
