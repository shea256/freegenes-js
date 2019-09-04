export default function filterItems(items, first, skip) {
  if (first !== undefined) {
    if (skip !== undefined) {
      return items.slice(skip, skip + first);
    }
    return items.slice(0, first);
  }
  return items;
}
