// Funciones para trabajar con arrays y números

export function unique(array) {
  return [...new Set(array)];
}

export function chunk(array, size) {
  const resultado = [];

  for (let i = 0; i < array.length; i += size) {
    resultado.push(array.slice(i, i + size));
  }

  return resultado;
}

export function average(numbers) {
  if (!numbers || numbers.length === 0) return 0;

  const suma = numbers.reduce((acc, n) => acc + n, 0);
  return suma / numbers.length;
}

export function shuffle(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}
