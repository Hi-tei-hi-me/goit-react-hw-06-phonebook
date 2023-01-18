import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { MdPersonAddDisabled, MdPersonAdd } from 'react-icons/md';
import { FormContainer, Label, Input, AddBtn } from './ContactForm.styled';
import { addContact } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const resetForm = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { name, number };
    if (
      contacts.some(contact => {
        return contact.name.trim().toLowerCase() === newContact.name.trim().toLowerCase();
      })
    ) {
      return toast(`${newContact.name} is already in your Book`, {
        icon: <MdPersonAddDisabled size={25} color="#ccba21" />,
      });
    } else {
      dispatch(addContact(newContact));
      toast(`${newContact.name} was successfully added to your Book`, {
        icon: <MdPersonAdd size={28} color="#327047" />,
      });
      resetForm();
    }
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
      <AddBtn type="submit">Add contact</AddBtn>
    </FormContainer>
  );
};
