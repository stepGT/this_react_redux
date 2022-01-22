import { LIKE_ON, LIKE_OFF } from './types';

const initialState = {
  like: false,
};

export const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_ON:
      return {
        ...state,
        like: true,
      };
    case LIKE_OFF:
      return {
        ...state,
        like: false,
      };
    default:
      return state;
  }
};
