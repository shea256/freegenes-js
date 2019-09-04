import isPositiveInteger from './isPositiveInteger';

export default function getPaginationVariables(query) {
  let first = 100;
  let skip = 0;
  const pageParam = query.page;
  let page = 1;
  if (!pageParam) {
    // do nothing
  } else if (isPositiveInteger(pageParam)) {
    page = parseInt(pageParam, 10);
    skip = first * (page - 1);
  } else {
    first = 0;
  }
  return { first, skip, page };
}
