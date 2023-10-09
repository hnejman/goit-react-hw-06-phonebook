import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter.jsx';

export const App = () => {
  return (
    <>
      <Filter/>
      <Form />
      <ContactsList />
    </>
  );
};
