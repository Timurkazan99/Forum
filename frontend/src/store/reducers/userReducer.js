import { SET_USER_ERROR, SET_USER, SET_USER_STATUS } from '../../utils/const';

const defaultState = {
  status: 'pending',
};

// eslint-disable-next-line default-param-last
export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case SET_USER_STATUS:
      return { ...state, status: action.payload };
    case SET_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
