import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <ContactItem name={name} phone={phone} key={id} />
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
