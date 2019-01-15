import { TOGGLE_IS_HEALTHY, TOGGLE_IS_DELICIOUS } from './constants';

export const initialState = {
  'e5d9d9f5': {
    label: 'ice cream',
    isDelicious: true,
    isHealthy: false,
  },
  'a9ba692b': {
    label: 'pizza',
    isDelicious: true,
    isHealthy: false,
  },
  'ze128a47': {
    label: 'spinach',
    isDelicious: false,
    isHealthy: true,
  },
};


export default function foods(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_IS_HEALTHY:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isHealthy: !state[action.id].isHealthy
        }
      };
    case TOGGLE_IS_DELICIOUS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isDelicious: !state[action.id].isDelicious
        }
      };
    default:
      return state;
  }
};