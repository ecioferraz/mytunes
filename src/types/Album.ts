import AlbumCardProps from '../templates/AlbumCard/AlbumCard.props';

type Album = {
  artistId: number;
  releaseDate: string;
  trackCount: number;
} & AlbumCardProps;

export default Album;
