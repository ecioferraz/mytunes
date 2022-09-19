import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageCard, TextCard } from '../../components';
import { AudioCard } from '../../components';
import { IAlbum, ITracklist } from '../../interfaces';
import { getMusics } from '../../services/APIRequests';

export default function TracklistCard() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [albumInfo, setAlbumInfo] = useState<IAlbum>();
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
    <main>
      {isLoading || error ? (
        <TextCard
          as='p'
          className={isLoading ? 'loading' : 'error-message'}
          text={isLoading ? 'Carregando...' : 'Oops! Algo deu errado.'}
        />
      ) : (
        <div>
          <section className='album-info'>
            <ImageCard
              alt={`Capa do álbum ${albumInfo?.collectionName}`}
              className='album-cover'
              imageURL={albumInfo?.artworkUrl100 as string}
            />
            <TextCard
              className='album-title'
              text={albumInfo?.collectionName as string}
            />
            <TextCard
              className='artist-name'
              text={albumInfo?.artistName as string}
            />
          </section>
          <section>
            {tracklist.map(({ previewUrl, trackId, trackName }) => (
              <div key={trackId}>
                <TextCard as='p' className='song-title' text={trackName} />
                <AudioCard previewUrl={previewUrl} />
              </div>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
