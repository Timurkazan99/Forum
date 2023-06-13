import { URI } from './const';

export default function getUrl() {
  const { pathname, search } = window.location;
  let normalizedPathname = pathname.replace(URI, '');
  if (pathname.includes('users')) {
    normalizedPathname += '/posts';
  }
  return normalizedPathname + search;
}
