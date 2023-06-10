import { useSearchParams } from 'react-router-dom';

export default function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getParams = () => ({
    page: Number(searchParams.get('page')) || 1,
    search: searchParams.get('search'),
  });

  const update = (page, search = null) => {
    const url = !search ? `page=${page}` : `page=${page}&search=${search}`;
    setSearchParams(new URLSearchParams(url));
  };

  return { getParams, update };
}
