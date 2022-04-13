import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

function ContactItem({ name, phone, id, onDeleteContact }) {
  return (
    <li className={s.item} key={id}>
      <span>
        <span>{name}</span>: <span>{phone}</span>
      </span>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete contact
      </button>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
};
