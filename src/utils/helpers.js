export function truncate(str, n = 120) {
  if (!str) return '';
  return str.length > n ? str.slice(0, n) + '...' : str;
}
