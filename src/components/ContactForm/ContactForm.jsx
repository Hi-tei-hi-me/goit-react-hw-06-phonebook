import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Label, Input, AddButton } from './ContactForm.styled';

export const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onFormSubmit({ name, number });
    resetForm();
  };
  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  return (
    <FormContainer autoComplete="off" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <Label htmlFor="name">Name:</Label>
            </td>
            <td>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <Label htmlFor="number">Phone №:</Label>
            </td>
            <td>
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
      <AddButton type="submit">Add contact</AddButton>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
