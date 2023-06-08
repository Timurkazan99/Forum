import { $host } from './index';
import { mapUrl } from '../utils/const';
import getMaxPage from '../utils/getMaxPage';

export const fetchPostsApi = async ({ type, page, search }) => {
  const getUrl = mapUrl[type];
  const { data, headers } = await $host.get(getUrl(page, search));
  const maxPage = getMaxPage(Number(headers.get('x-total-count')));
  return { data, maxPage };
};

export const fetchCommentsApi = async (id) => {
  const { data } = await $host.get(`/posts/${id}/comments`);
  return { [id]: data };
};
