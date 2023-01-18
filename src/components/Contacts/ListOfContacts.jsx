import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import { ContactsList } from './Contacts.styled';
import { getFilteredList } from 'redux/selectors';

export const ContactList = () => {
  const listOfContacts = useSelector(getFilteredList);
  return (
    <ContactsList>
      {listOfContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
};
