import { ADD_COMMENTS, SET_COMMENTS_ACTIVE, SET_COMMENTS_STATUS } from '../../utils/const';

const defaultState = {
  status: 'pending',
  active: null,
};

export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return { ...state, ...action.payload };
    case SET_COMMENTS_STATUS:
      return { ...state, status: action.payload };
    case SET_COMMENTS_ACTIVE:
      return { ...state, active: action.payload };
  }
  return state;
}
