import {
  ADD_COMMENTS, SET_COMMENTS_ACTIVE, SET_COMMENTS_STATUS, SET_USER_ERROR,
} from '../../utils/const';

const defaultState = {
  status: 'pending',
  active: null,
};

// eslint-disable-next-line default-param-last
export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return { ...state, ...action.payload };
    case SET_COMMENTS_STATUS:
      return { ...state, status: action.payload };
    case SET_COMMENTS_ACTIVE:
      return { ...state, active: action.payload };
    case SET_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
