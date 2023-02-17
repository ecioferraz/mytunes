import { Button, TextInput } from '../../components';
import SearchFormProps from './SearchForm.props';

import './styles.css';

export default function SearchForm({
  handleSubmit,
  search,
  setSearch,
}: SearchFormProps) {
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <TextInput
        className="search-input"
        handleChange={({ target: { value } }) => setSearch(value)}
        name="search"
        placeholder="Pesquise um artista ou banda..."
        type="search"
        value={search}
      />
      <Button
        className="search-btn"
        name="search"
        type="submit"
        disabled={!search}
      />
    </form>
  );
}
