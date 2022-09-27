import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageCard, TextCard } from '../../components';
import { IAlbum, ITracklist } from '../../interfaces';
import { getMusics } from '../../services/APIRequests';
import shortenName from '../../utils/shortenName';
import SongCard from '../SongCard';

import './styles.css';

const ALBUM_INFO_INITIAL_STATE = {
  artistName: '',
  artworkUrl100: '',
  collectionId: 0,
  collectionName: '',
  artistId: 0,
  releaseDate: '',
  trackCount: 0,
};

export default function TracklistCard() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [albumInfo, setAlbumInfo] = useState<IAlbum>(ALBUM_INFO_INITIAL_STATE);
  const [tracklist, setTracklist] = useState<ITracklist[]>([]);

  useEffect(() => {
    const getAlbum = async () => {
      setIsLoading(true);
      const album = await getMusics(id as string);
      console.log(album);
      if (album.message) {
        setError(true);
      } else {
        setAlbumInfo(album[0]);
        setTracklist(
          album.filter((track: ITracklist) => track.kind === 'song')
        );
      }
      setIsLoading(false);
    };

    getAlbum();
  }, []);

  return (
    <>
      {isLoading || error ? (
        <TextCard
          as='p'
          className={isLoading ? 'loading' : 'error-message'}
          text={isLoading ? 'Carregando...' : 'Oops! Algo deu errado.'}
        />
      ) : (
        <div className='tracklist'>
          <section className='album-info'>
            <ImageCard
              alt={`Capa do álbum ${albumInfo?.collectionName}`}
              className='album-cover'
              imageURL={albumInfo?.artworkUrl100 as string}
            />
            <TextCard
              as='p'
              className='album-title'
              text={shortenName(albumInfo?.collectionName as string)}
            />
            <TextCard
              as='p'
              className='artist-name'
              text={shortenName(albumInfo?.artistName as string)}
            />
          </section>
          <section>
            {tracklist.map((song) => (
              <SongCard key={song.trackId} song={song} />
            ))}
          </section>
        </div>
      )}
    </>
  );
}
