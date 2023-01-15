import PropTypes from 'prop-types';
import { SearchForm, Label, Input } from './SearchForm.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <SearchForm>
      <Label htmlFor="filter">Find contact by name:</Label>
      <Input
        name="filter"
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
        autoFocus
      />
    </SearchForm>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
