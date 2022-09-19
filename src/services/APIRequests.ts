import axios from 'axios';
import { IAlbum } from '../interfaces';

const baseURL = 'https://itunes.apple.com/';

const api = axios.create({ baseURL });

export const getAlbums = async (artist: string) => {
  const { data: { results } } = await api.get(
    `search?entity=album&term=${artist}&attribute=allArtistTerm`
  );

  return results.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
      releaseDate,
      trackCount,
    }: IAlbum) => ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
      releaseDate,
      trackCount,
    })
  );
};

export const getMusics = async (id: string) => {
  try {
    const { data: { results } } = await api.get(`lookup?id=${id}&entity=song`);
    return results;
  } catch (error) {
    return error;
  }
};
