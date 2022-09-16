import { IAlbumCard } from '../templates/AlbumCard';

interface IAlbum extends IAlbumCard {
  artistId: number;
  releaseDate: string;
  trackCount: number;
}

export default IAlbum;
