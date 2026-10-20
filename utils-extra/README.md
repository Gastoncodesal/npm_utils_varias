# utils-extra-gaston

Librería de utilidades JavaScript con funciones para trabajar con textos, validaciones y arrays. Sirve para reutilizar en cualquier proyecto operaciones comunes sin tener que reescribirlas.

## Instalación

```bash
npm install utils-extra-gaston
```

La librería usa módulos ES, por lo que el proyecto que la instale tiene que tener `"type": "module"` en su `package.json`.

## Ejemplo de uso

```js
import {
  toCamelCase,
  isValidDNI,
  unique,
} from "utils-extra-gaston";

console.log(toCamelCase("nombre de usuario")); // nombreDeUsuario
console.log(isValidDNI("40.123.456"));         // true
console.log(unique([1, 2, 2, 3]));             // [1, 2, 3]
```

## Funciones disponibles

### Textos


| Función              | Descripción                                                                   | Ejemplo                                              |
| --------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `reverseText(texto)`  | Da vuelta un texto                                                             | `reverseText("hola")` devuelve `"aloh"`              |
| `countWords(texto)`   | Cuenta la cantidad de palabras                                                 | `countWords("hola mundo")` devuelve `2`              |
| `toCamelCase(texto)`  | Convierte un texto a camelCase                                                 | `toCamelCase("mi variable")` devuelve `"miVariable"` |
| `isPalindrome(texto)` | Verifica si un texto es palíndromo, ignorando acentos, espacios y mayúsculas | `isPalindrome("Anita lava la tina")` devuelve `true` |

### Validaciones


| Función                     | Descripción                                                                              | Ejemplo                                        |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `isNumeric(valor)`           | Verifica si un valor es un número (o un texto numérico)                                 | `isNumeric("123")` devuelve `true`             |
| `isValidDNI(dni)`            | Verifica que un DNI tenga 7 u 8 dígitos (acepta puntos)                                  | `isValidDNI("40.123.456")` devuelve `true`     |
| `isStrongPassword(password)` | Verifica que la contraseña tenga al menos 8 caracteres, mayúscula, minúscula y número | `isStrongPassword("Hola1234")` devuelve `true` |

### Arrays


| Función                | Descripción                                   | Ejemplo                                        |
| ----------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `unique(array)`         | Elimina los elementos repetidos                | `unique([1, 1, 2])` devuelve `[1, 2]`          |
| `chunk(array, tamaño)` | Divide un array en grupos del tamaño indicado | `chunk([1, 2, 3], 2)` devuelve `[[1, 2], [3]]` |
| `average(numeros)`      | Calcula el promedio de un array de números    | `average([2, 4, 6])` devuelve `4`              |
| `shuffle(array)`        | Devuelve una copia del array mezclada al azar  | `shuffle([1, 2, 3])`                           |

## Tests

```bash
npm test
```

## Autor

Gaston Codesal
