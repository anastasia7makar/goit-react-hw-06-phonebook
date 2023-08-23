import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const { contacts } = useSelector(state => state);
  const filterValue = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  const filteredContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <p className={css.text}>
              {name}: <span>{number}</span>
            </p>
            <button
              type="button"
              id={id}
              onClick={handleDelete}
              className={css.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
