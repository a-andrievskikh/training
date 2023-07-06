// @ts-nocheck
const switcher = x => (
  (reverse = ' zyxwvutsrqponmlkjihgfedcba!? '),
  x.map(element => reverse[element]).join('')
);
