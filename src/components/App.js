import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Contacts } from './Form/Form.jsx';
import { Filter } from './Filter/Filter.jsx';

export const App = () => {
  return (
    <>
      <Contacts />
      <Filter/>
      <ContactsList />
    </>
  );
};
