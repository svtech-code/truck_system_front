// expresión regurlar usada para validar compos input generales
// permite letras mayusculas y minusculas, tildes, ñ, números, espacios y guión medio
export const REGEX_numberString = /^[A-ZÁÉÍÓÚÑ0-9 `,.\-/#]+$/;

// expresión regurlar usada para validar compos input generales
// permite letras mayusculas y minusculas, tildes, ñ, espacios y guión medio
export const REGEX_String = /^[A-ZÁÉÍÓÚÑ `-]+$/;

// expresion regular para manejar campos que se deshabilitan según una opción externa
export const REGEX_StringDisabled = /^[A-ZÁÉÍÓÚÑ -]+|--$/;

// expresión regular usada para validar nombre de usuario
//permite letras mayusculas y minusculas, números, caracteres especiales [@ _] y logitud de entre 6 y 12
export const REGEX_userName = /^[a-zA-Z0-9@_]{6,12}$/;

// expresión regulara usada para validar contraseña
export const REGEX_password = /^[a-zA-Z0-9!@#$%]{6,12}$/;

// respaldo para regex que exige caracteres en password
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,12}$/;

// expresión regular usada para validar run
// permite letras minusculas y mayusculas, numeros, espacios y guión medio
export const REGEX_run = /^[a-zA-Z0-9\-]{7,11}$/;

// expresión regular usada para validar en un string solo números
// permite solo digitos
export const REGEX_number = /^\d{8,11}$/;

// expresión regular usada para validar un email
// permite formato de mail
export const REGEX_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
