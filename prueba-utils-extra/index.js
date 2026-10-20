import {
  reverseText,
  countWords,
  toCamelCase,
  isPalindrome,
  isNumeric,
  isValidDNI,
  isStrongPassword,
  unique,
  chunk,
  average,
  shuffle,
} from "utils-extra-gaston";

console.log(reverseText("hola"));
console.log(countWords("esto es una prueba"));
console.log(toCamelCase("nombre de usuario"));
console.log(isPalindrome("Anita lava la tina"));

console.log(isNumeric("123"));
console.log(isValidDNI("40.123.456"));
console.log(isStrongPassword("Hola1234"));

console.log(unique([1, 2, 2, 3, 3]));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(average([10, 20, 30]));
console.log(shuffle([1, 2, 3, 4, 5]));
