import PropTypes from 'prop-types';

const initState = () => {
  if (
    localStorage.getItem('contacts') !== null &&
    localStorage.getItem('contacts') !== undefined
  ) {
    return JSON.parse(localStorage.getItem('contacts'));
  } else {
    return [];
  }
};

export const formReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'contacts/add contact': {
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    }
    case 'contacts/deleting contact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

formReducer.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  action: PropTypes.shape({
    type: PropTypes.string.isRequired,
    payload: PropTypes.string,
  }),
};