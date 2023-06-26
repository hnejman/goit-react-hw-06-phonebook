import { ContactsList } from 'components/ContactsList/ContactsList';
import { Contacts } from './Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Contacts />
      <Filter/>
      <ContactsList />
    </>
  );
};
