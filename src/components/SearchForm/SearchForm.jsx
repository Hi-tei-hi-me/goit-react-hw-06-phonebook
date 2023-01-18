import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchForm, Label, Input } from './SearchForm.styled';
import { setFilter } from 'redux/searchForm/filtersSlice';
import { getFilter } from 'redux/searchForm/selectors';
import { getContacts } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const handleChange = evt => dispatch(setFilter(evt.target.value));
  return (
    <SearchForm>
      <Label htmlFor="filter">Find contact by name:</Label>
      <Input
        autoFocus
        disabled={contacts.length < 2 && !filter}
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </SearchForm>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
