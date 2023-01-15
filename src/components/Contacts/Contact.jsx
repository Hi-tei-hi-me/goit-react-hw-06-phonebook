import PropTypes from 'prop-types';
import { Item, DeleteButton } from './Contacts.styled';

export const Contact = ({ id, name, number, handleCLick }) => {
  return (
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <DeleteButton type="button" onClick={() => handleCLick(id, name)}>
        Delete contact
      </DeleteButton>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
