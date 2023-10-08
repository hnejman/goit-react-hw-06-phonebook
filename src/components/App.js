import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Contacts } from './Form/Form';
import { Filter } from './Filter/Filter.jsx';

export const App = () => {
  return (
    <>
      <Filter/>
      <Contacts />
      <ContactsList />
    </>
  );
};
