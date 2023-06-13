import { $host } from './index';
import getMaxPage from '../utils/getMaxPage';
import getUrl from '../utils/getUrl';

export const fetchPostsApi = async () => {
  const { data, headers } = await $host.get(getUrl());
  const maxPage = getMaxPage(Number(headers.get('x-total-count')));
  return { data, maxPage };
};

export const fetchCommentsApi = async (id) => {
  const { data } = await $host.get(`/posts/${id}/comments`);
  return { [id]: data };
};
