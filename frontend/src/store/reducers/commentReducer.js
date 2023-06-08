import { ADD_COMMENTS, SET_COMMENTS_STATUS } from '../../utils/const';

const defaultState = {
  status: 'pending',
};

export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return { ...state, ...action.payload };
    case SET_COMMENTS_STATUS:
      return { ...state, status: action.payload };
  }
  return state;
}
