import React from 'react';
import { Button, TextInput } from '../../components';
import ISearchForm from './ISearchForm';

export default function SearchForm({
  handleSubmit,
  search,
  setSearch,
}: ISearchForm) {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        className='search-input'
        handleChange={({ target: { value } }) => setSearch(value)}
        name='search'
        placeholder='Pesquise um artista ou banda...'
        type='search'
        value={search}
      />
      <Button
        className='search-btn'
        name='Pesquisar'
        type='submit'
        disabled={!search}
      />
    </form>
  );
}
