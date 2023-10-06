import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const contacts = localStorage.getItem('contacts');
    console.log(contacts);
    contacts.filter(element=>{
      element.id !== contact.id
    });
    localStorage.setItem("contacts", contacts);
    dispatch(deleteContact(contact.id));
  };
  return (
    <p>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </p>
  );
};
