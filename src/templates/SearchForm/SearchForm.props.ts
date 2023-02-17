import { Dispatch, FormEventHandler, SetStateAction } from 'react';

type SearchFormProps = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default SearchFormProps;
