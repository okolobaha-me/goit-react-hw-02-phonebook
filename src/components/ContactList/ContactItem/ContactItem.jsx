import s from './ContactItem.module.css';

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
