export default function getProperty(obj, path) {
  if (!path.includes('.')) {
    return obj[path];
  }
  const [first, second] = path.split('.');
  return obj[first][second];
}
