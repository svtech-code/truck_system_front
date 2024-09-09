// función para agergar un guión medio a un rut
export const formatRut = (value, setFieldValue, nameInput) => {
  // formatear el texto a mayuscula
  let inputValue = value.toUpperCase();

  // permite solo números y letra K, eliminando cualquier otro caracter
  inputValue = inputValue.replace(/[^0-9K]/g, "");

  // eliminar guiones adicionales
  inputValue = inputValue.replace(/-/g, "");

  // si el valor tiene 6 o más caracteres, se agrega el guión en el penúltimo espacio
  if (inputValue.length >= 6) {
    const lastChar = inputValue.slice(-1); // último caracter
    const rest = inputValue.slice(0, -1); // resto de los caracteres
    inputValue = rest + "-" + lastChar; // colocar guión antes del último caracter
  }

  // asignación del valor formateado
  setFieldValue(nameInput, inputValue);
};
