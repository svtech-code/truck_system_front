// expresión regurlar usada para validar compos input generales
export const REGEX_numberString = /^[A-ZÁÉÍÓÚÑ0-9 -]+$/;

// expresión regular usada para validar nombre de usuario
export const REGEX_userName = /^[a-zA-Z0-9@_]{6,12}$/;

// expresión regulara usada para validar contraseña
export const REGEX_password = /^[a-zA-Z0-9!@#$%]{6,12}$/;
// respado para regex que exige caracteres en password
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,12}$/;
