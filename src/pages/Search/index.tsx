import { FormEvent, useState } from 'react';
import { Footer, Loading, TextCard } from '../../components';
import { getAlbums } from '../../services/APIRequests';
import { AlbumCard, SearchForm } from '../../templates';
import { Album } from '../../types';

import './styles.css';

export default function Search() {
  const [discography, setDiscography] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const albums = await getAlbums(search);
    setDiscography(albums);
    setIsLoading(false);
  };

  return (
    <>
      <main className={`search-page ${!discography.length && 'full-screen'}`}>
        <SearchForm
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="album-library">
            {discography.length ? (
              <TextCard
                as="p"
                className="search-result"
                text={`Resultado de busca para: ${search}`}
              />
            ) : null}
            <div className="album-cards">
              {discography.map(
                ({
                  artistName,
                  artworkUrl100,
                  collectionId,
                  collectionName,
                }) => (
                  <AlbumCard
                    key={collectionId}
                    artistName={artistName}
                    artworkUrl100={artworkUrl100}
                    collectionId={collectionId}
                    collectionName={collectionName}
                  />
                ),
              )}
            </div>
          </div>
        )}
      </main>
      <Footer
        author="lookstudio"
        href="https://www.freepik.com/photos/music"
        tag="Music"
      />
    </>
  );
}
