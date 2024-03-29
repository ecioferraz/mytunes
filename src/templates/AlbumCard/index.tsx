import { Link } from 'react-router-dom';
import { ImageCard, TextCard } from '../../components';
import shortenName from '../../utils/shortenName';
import AlbumCardProps from './AlbumCard.props';

import './styles.css';

export default function AlbumCard({
  artistName,
  artworkUrl100,
  collectionId,
  collectionName,
}: AlbumCardProps) {
  return (
    <Link to={`/mytunes/album/${collectionId}`} className="album-card">
      <ImageCard
        alt={`Capa do álbum ${collectionName}.`}
        className="album-image"
        imageURL={artworkUrl100}
      />
      <TextCard
        as="h1"
        className="album-title"
        text={shortenName(collectionName)}
      />
      <TextCard
        as="h2"
        className="artist-name"
        text={shortenName(artistName)}
      />
    </Link>
  );
}
