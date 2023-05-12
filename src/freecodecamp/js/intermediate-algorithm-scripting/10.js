function fearNotLetter(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  if (alpha.includes(str)) return;

  const slicedAlpha = alpha.slice(alpha.indexOf(str[0]));
  for (let i = 0; i < slicedAlpha.length; i++) {
    if (!str.includes(slicedAlpha[i])) return slicedAlpha[i];
  }
}

fearNotLetter('abce');
