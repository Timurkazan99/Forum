import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../utils/const';

export default function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getParams = () => ({
    page: Number(searchParams.get('_page')),
    title: searchParams.get('title_like'),
    limit: Number(searchParams.get('_limit')) || ITEMS_PER_PAGE,
  });

  const update = (page, title = null, limit = ITEMS_PER_PAGE) => {
    const url = !title ? `_page=${page}&_limit=${limit}` : `_page=${page}&title_like=${title}&_limit=${limit}`;
    setSearchParams(new URLSearchParams(url), { replace: true });
  };

  return { getParams, update };
}
