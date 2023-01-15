import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { ContactsList } from './Contacts.styled';

export const ContactList = ({ listOfContacts, handleCLick }) => {
  return (
    <ContactsList>
      {listOfContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} handleCLick={handleCLick} />;
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  listOfContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
