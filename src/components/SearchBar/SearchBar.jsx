import { useForm } from 'react-hook-form';

export const SearchBar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const onSearchSubmit = ({ value }) => onSubmit(value);
  return (
    <form onSubmit={handleSubmit(onSearchSubmit)}>
      <input type="text" {...register('value')} />
      <button type="submit">Search</button>
    </form>
  );
};
