import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';

export const ContactsList = () => {

  const contacts = useSelector(state => state.form);
  const filter = useSelector(state => state.filter);

  return (
    <ul>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())||
        contact.number.includes(filter))
        .map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
