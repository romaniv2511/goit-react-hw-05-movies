import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input, Button } from './SearchBar.styles';

export const SearchBar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const onSearchSubmit = ({ value }) => onSubmit(value);
  return (
    <form onSubmit={handleSubmit(onSearchSubmit)}>
      <Input type="text" {...register('value')} />
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
