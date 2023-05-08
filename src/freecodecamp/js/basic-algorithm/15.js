function mutation([el1, el2]) {
  const reg = new RegExp(`[^${el1}]`, 'i');
  return !reg.test(el2);
}

mutation(['hello', 'hey']);
