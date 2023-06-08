export const URI = process.env.REACT_APP_URI || '';
export const POST_ROUTE = `${URI}/posts`;
export const USER_ROUTE = `${URI}/user/:id`;
export const ABOUT_ME_ROUTE = `${URI}/about-me`;

export const ITEMS_PER_PAGE = 5;

export const FETCH_POST = 'FETCH_POST';
export const SET_POST = 'SET_POST';
export const SET_PAGE = 'SET_PAGE';
export const SET_MAX_PAGE = 'SET_MAX_PAGE';
export const FIND_POST = 'FIND_POST';
export const SET_POST_STATUS = 'SET_POST_STATUS';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const SET_COMMENTS_STATUS = 'SET_COMMENTS_STATUS';

export const FETCH_USER = 'FETCH_USER';
export const SET_USER = 'SET_USER';
export const SET_USER_STATUS = 'SET_USER_STATUS';

export const mapUrl = {
  [FETCH_POST]: (page) => `/posts/?_page=${page}&_limit=${ITEMS_PER_PAGE}`,
  [FIND_POST]: (page, search) => `/posts/?title_like=${search}&_page=${page}&_limit=${ITEMS_PER_PAGE}`,
};
