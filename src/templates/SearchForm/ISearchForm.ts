import { Dispatch, FormEventHandler, SetStateAction } from 'react';

interface ISearchForm {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default ISearchForm;
