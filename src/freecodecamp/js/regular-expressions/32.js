let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
