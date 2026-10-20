import { test } from "node:test";
import assert from "node:assert/strict";

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
} from "../src/index.js";

test("reverseText da vuelta el texto", () => {
  assert.equal(reverseText("hola"), "aloh");
  assert.equal(reverseText(""), "");
});

test("countWords cuenta las palabras", () => {
  assert.equal(countWords("hola mundo cruel"), 3);
  assert.equal(countWords("   "), 0);
});

test("toCamelCase convierte a camelCase", () => {
  assert.equal(toCamelCase("hola mundo cruel"), "holaMundoCruel");
  assert.equal(toCamelCase("nombre_de_usuario"), "nombreDeUsuario");
});

test("isPalindrome detecta palíndromos", () => {
  assert.equal(isPalindrome("Anita lava la tina"), true);
  assert.equal(isPalindrome("hola"), false);
});

test("isNumeric verifica si un valor es numérico", () => {
  assert.equal(isNumeric("123"), true);
  assert.equal(isNumeric(4.5), true);
  assert.equal(isNumeric("abc"), false);
  assert.equal(isNumeric(""), false);
});

test("isValidDNI valida el formato del DNI", () => {
  assert.equal(isValidDNI("40123456"), true);
  assert.equal(isValidDNI("40.123.456"), true);
  assert.equal(isValidDNI("123"), false);
  assert.equal(isValidDNI("abc12345"), false);
});

test("isStrongPassword valida contraseñas seguras", () => {
  assert.equal(isStrongPassword("Hola1234"), true);
  assert.equal(isStrongPassword("hola1234"), false);
  assert.equal(isStrongPassword("Hola"), false);
});

test("unique saca los repetidos", () => {
  assert.deepEqual(unique([1, 2, 2, 3, 3, 3]), [1, 2, 3]);
});

test("chunk divide el array en grupos", () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test("average calcula el promedio", () => {
  assert.equal(average([2, 4, 6]), 4);
  assert.equal(average([]), 0);
});

test("shuffle mezcla sin perder elementos ni modificar el original", () => {
  const original = [1, 2, 3, 4, 5];
  const mezclado = shuffle(original);

  assert.equal(mezclado.length, 5);
  assert.deepEqual([...mezclado].sort(), [1, 2, 3, 4, 5]);
  assert.deepEqual(original, [1, 2, 3, 4, 5]);
});
