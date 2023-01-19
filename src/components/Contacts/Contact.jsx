import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { MdPersonRemove } from 'react-icons/md';
import { Item, DeleteBtn } from './Contacts.styled';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast(`${name} was removed from your Book`, {
      icon: <MdPersonRemove size={25} color="#b24a4a" />,
    });
  };
  return (
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete contact
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
