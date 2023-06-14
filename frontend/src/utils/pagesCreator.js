/* eslint-disable functional/no-let, functional/no-loop-statement */
const pagesCreator = (page, maxPage) => {
  const pages = [];

  if (maxPage <= 0) {
    return pages;
  }

  if (page > 5) {
    for (let i = page - 4; i <= page + 5; i += 1) {
      pages.push(i);
      if (i === maxPage) break;
    }
  } else {
    for (let i = 1; i <= 10; i += 1) {
      pages.push(i);
      if (i === maxPage) break;
    }
  }
  return pages;
};
/* eslint-enable functional/no-let, functional/no-loop-statement */

export default pagesCreator;
