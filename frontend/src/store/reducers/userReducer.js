import { SET_USER, SET_USER_STATUS } from '../../utils/const';

const defaultState = {
  status: 'pending',
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USER_STATUS:
      return { ...state, status: action.payload };
  }
  return state;
}
