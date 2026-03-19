function repeatChars(s, n) {
  if (n <= 0) return '';
  let r = '';
  for (const c of s) r += c.repeat(n);
  return r;
}

console.log(repeatChars("s", 7));