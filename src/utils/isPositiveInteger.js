export default function isPositiveInteger(str) {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n > 0;
}