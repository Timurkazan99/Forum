import {
  SET_MAX_PAGE, SET_POST, SET_POST_ERROR, SET_POST_STATUS,
} from '../../utils/const';

const defaultState = {
  items: [],
  maxPage: 1,
  status: 'pending',
};

// eslint-disable-next-line default-param-last
export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POST:
      return { ...state, items: action.payload };
    case SET_MAX_PAGE:
      return { ...state, maxPage: action.payload };
    case SET_POST_STATUS:
      return { ...state, status: action.payload };
    case SET_POST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
