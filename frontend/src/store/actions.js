import {
  ADD_COMMENTS,
  FETCH_COMMENTS,
  FETCH_POST,
  FETCH_USER,
  FIND_POST,
  SET_COMMENTS_STATUS,
  SET_MAX_PAGE,
  SET_PAGE,
  SET_POST,
  SET_POST_STATUS,
  SET_USER,
  SET_USER_STATUS,
} from '../utils/const';

export const fetchPostsCreator = (page) => ({ type: FETCH_POST, page });
export const setPostCreator = (payload) => ({ type: SET_POST, payload });
export const setPageCreator = (payload) => ({ type: SET_PAGE, payload });
export const setMaxPageCreator = (payload) => ({ type: SET_MAX_PAGE, payload });
export const setFindPostCreator = (page, search) => ({ type: FIND_POST, page, search });
export const setPostStatusCreator = (payload) => ({ type: SET_POST_STATUS, payload });

export const fetchCommentsCreator = (payload) => ({ type: FETCH_COMMENTS, payload });
export const addCommentsCreator = (payload) => ({ type: ADD_COMMENTS, payload });
export const setCommentsStatusCreator = (payload) => ({ type: SET_COMMENTS_STATUS, payload });

export const fetchUserCreator = (payload) => ({ type: FETCH_USER, payload });
export const setUserCreator = (payload) => ({ type: SET_USER, payload });
export const setUserStatusCreator = (payload) => ({ type: SET_USER_STATUS, payload });
