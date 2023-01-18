import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { NothingAdded, NotFound } from './Notifications/Notifications.styled';
import { Box } from './Box/Box.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './Contacts/ListOfContacts';
import { Filter } from './SearchForm/SearchForm';
import { getContacts } from 'redux/contacts/selectors';
import { getFilteredList } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filteredList = useSelector(getFilteredList);
  return (
    <Box>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 && <NothingAdded>This Book is empty. Yet.</NothingAdded>}
      {contacts.length > 0 && <Filter />}
      {filteredList.length > 0 && <ContactList />}
      {contacts.length > 0 && filteredList.length === 0 && (
        <NotFound>Sorry, no one's here!</NotFound>
      )}
    </Box>
  );
};
