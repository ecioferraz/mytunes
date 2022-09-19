import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextCard } from '../../components';
import { IAlbum } from '../../interfaces';
import { getAlbums } from '../../services/APIRequests';
import { readUser } from '../../services/localStorage';
import { AlbumCard, SearchForm } from '../../templates';

export default function Search() {
  const navigate = useNavigate();
  const [discography, setDiscography] = useState<IAlbum[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const albums = await getAlbums(search);
    setDiscography(albums);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!readUser()) navigate('/search');
  }, []);

  return (
    <main>
      <SearchForm
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      {isLoading ? (
        <TextCard className='loading' text='Carregando...' />
      ) : (
        discography.map(
          ({ artistName, artworkUrl100, collectionId, collectionName }) => (
            <AlbumCard
              key={collectionId}
              artistName={artistName}
              artworkUrl100={artworkUrl100}
              collectionId={collectionId}
              collectionName={collectionName}
            />
          )
        )
      )}
    </main>
  );
}
