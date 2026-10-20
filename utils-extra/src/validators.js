// Funciones de validación

export function isNumeric(value) {
  if (typeof value === "number") return !isNaN(value);
  if (typeof value !== "string" || value.trim() === "") return false;

  return !isNaN(Number(value));
}

export function isValidDNI(dni) {
  const texto = String(dni).replace(/\./g, "");

  return /^\d{7,8}$/.test(texto);
}

export function isStrongPassword(password) {
  if (typeof password !== "string") return false;

  const tieneLargo = password.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneNumero = /\d/.test(password);

  return tieneLargo && tieneMayuscula && tieneMinuscula && tieneNumero;
}
