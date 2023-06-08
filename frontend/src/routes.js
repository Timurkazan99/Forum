import { POST_ROUTE, USER_ROUTE, ABOUT_ME_ROUTE } from './utils/const';
import AboutMe from './pages/AboutMe.jsx';
import Post from './pages/Post.jsx';
import User from './pages/User.jsx';

const routes = [
  {
    path: POST_ROUTE,
    Component: Post,
  },
  {
    path: USER_ROUTE,
    Component: User,
  },
  {
    path: ABOUT_ME_ROUTE,
    Component: AboutMe,
  },
];

export default routes;
