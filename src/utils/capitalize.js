export default function capitalize(str) {
  return str.replace(/(?:^|\s)\S/g, a => a.toUpperCase());
}
