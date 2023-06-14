import { URI } from './const';

export default function getUrl() {
  const { pathname, search } = window.location;
  let normalizedPathname = pathname.replace(URI, ''); // eslint-disable-line functional/no-let
  if (pathname.includes('users')) {
    normalizedPathname += '/posts';
  }
  return normalizedPathname + search;
}
