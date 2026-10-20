// Funciones para trabajar con textos

export function reverseText(text) {
  if (!text) return "";

  return text.split("").reverse().join("");
}

export function countWords(text) {
  if (!text || text.trim() === "") return 0;

  return text.trim().split(/\s+/).length;
}

export function toCamelCase(text) {
  if (!text) return "";

  const palabras = text.toLowerCase().trim().split(/[\s_-]+/);

  return palabras
    .map((palabra, i) => {
      if (i === 0) return palabra;
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join("");
}

export function isPalindrome(text) {
  if (!text) return false;

  const limpio = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]/g, "");

  return limpio === limpio.split("").reverse().join("");
}
