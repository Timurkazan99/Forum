import { $host } from './index';

const fetchUserApi = async (id) => {
  const { data } = await $host.get(`/users/${id}`);
  return data;
};

const fetchUserPostsApi = async (id) => {
  const { data } = await $host.get(`/users/${id}/posts`);
  return data;
};

export { fetchUserApi, fetchUserPostsApi };
