import {
  ADD_COMMENTS,
  FETCH_COMMENTS,
  FETCH_POST,
  FETCH_USER,
  SET_COMMENTS_ACTIVE,
  SET_COMMENTS_STATUS,
  SET_MAX_PAGE,
  SET_POST,
  SET_POST_STATUS,
  SET_USER,
  SET_USER_STATUS,
} from '../utils/const';

export const fetchPostsCreator = () => ({ type: FETCH_POST });
export const setPostCreator = (payload) => ({ type: SET_POST, payload });
export const setMaxPageCreator = (payload) => ({ type: SET_MAX_PAGE, payload });
export const setPostStatusCreator = (payload) => ({ type: SET_POST_STATUS, payload });

export const fetchCommentsCreator = (payload) => ({ type: FETCH_COMMENTS, payload });
export const addCommentsCreator = (payload) => ({ type: ADD_COMMENTS, payload });
export const setCommentsStatusCreator = (payload) => ({ type: SET_COMMENTS_STATUS, payload });
export const setCommentsActive = (payload) => ({ type: SET_COMMENTS_ACTIVE, payload });

export const fetchUserCreator = (payload) => ({ type: FETCH_USER, payload });
export const setUserCreator = (payload) => ({ type: SET_USER, payload });
export const setUserStatusCreator = (payload) => ({ type: SET_USER_STATUS, payload });
