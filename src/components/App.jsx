import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { MdPersonAddDisabled, MdPersonAdd, MdPersonRemove } from 'react-icons/md';
import { NotFound } from './NotFound/NotFound.styled';
import { Box } from './Box/Box.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contacts/ListOfContacts';
import { Filter } from './SearchForm/SearchForm';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, applyFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });
  const addContact = newContact => {
    if (
      contacts.some(contact => {
        return contact.name.trim().toLowerCase() === newContact.name.toLowerCase();
      })
    ) {
      return toast(`${newContact.name} is already in your Book`, {
        icon: <MdPersonAddDisabled size={25} color="#ccba21" />,
      });
    }
    const id = nanoid();
    const newAddedContact = { id, ...newContact };
    setContacts(prevState => [newAddedContact, ...prevState]);
    return toast(`${newContact.name} was successfully added to your Book`, {
      icon: <MdPersonAdd size={28} color="#327047" />,
    });
  };
  const deleteContact = (id, name) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
    return toast(`${name} was removed from your Book`, {
      icon: <MdPersonRemove size={25} color="#b24a4a" />,
    });
  };
  const getFilteredList = () => {
    const normalizedFilter = filter.trim().toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };
  const filteredList = getFilteredList();
  return (
    <Box>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      <h2>Contacts</h2>
      {filteredList.length > 0 && (
        <>
          <Filter value={filter} onChange={applyFilter} />
          <ContactList listOfContacts={filteredList} handleCLick={deleteContact} />
        </>
      )}
      {filter && filteredList.length === 0 && (
        <>
          <Filter value={filter} onChange={applyFilter} />
          <NotFound>No results found for "{filter}".</NotFound>
        </>
      )}
    </Box>
  );
};
