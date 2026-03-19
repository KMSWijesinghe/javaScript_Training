function repeatChars(s, n) {
  if (n <= 0) return '';
  let r = '';
  for (const b of s) r += b.repeat(n);
  return r;
}

console.log(repeatChars("sameera", 7));