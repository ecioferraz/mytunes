import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageCard, Loading, TextCard } from '../../components';
import { IAlbum, ITracklist } from '../../interfaces';
import { getMusics } from '../../services/APIRequests';
import { ALBUM_INFO_INITIAL_STATE } from '../../utils/constants';
import shortenName from '../../utils/shortenName';
import SongCard from '../SongCard';

import './styles.css';

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
        error ? (
          <TextCard
            as='p'
            className='error-message'
            text='Oops! Algo deu errado.'
          />
        ) : (
          <Loading />
        )
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
