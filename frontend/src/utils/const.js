export const URI = process.env.REACT_APP_URI || '';
export const POST_ROUTE = `${URI}/posts`;
export const USER_ROUTE = `${URI}/users/:id`;
export const ABOUT_ME_ROUTE = `${URI}/about-me`;

export const ITEMS_PER_PAGE = process.env.REACT_LIMIT || 5;

export const FETCH_POST = 'FETCH_POST';
export const SET_POST = 'SET_POST';
export const SET_MAX_PAGE = 'SET_MAX_PAGE';
export const SET_POST_STATUS = 'SET_POST_STATUS';
export const SET_POST_ERROR = 'SET_POST_ERROR';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const SET_COMMENTS_STATUS = 'SET_COMMENTS_STATUS';
export const SET_COMMENTS_ACTIVE = 'SET_COMMENTS_ACTIVE';
export const SET_COMMENTS_ERROR = 'SET_COMMENTS_ERROR';

export const FETCH_USER = 'FETCH_USER';
export const SET_USER = 'SET_USER';
export const SET_USER_STATUS = 'SET_USER_STATUS';
export const SET_USER_ERROR = 'SET_USER_ERROR';
