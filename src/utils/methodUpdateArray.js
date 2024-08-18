// function to add new data or update data refactory
export const updateArray = ({ arrayData, idData, idField, updateFields }) => {
  // verificación de la existencia del id en el array de datos
  const existId = arrayData.some((item) => item[idField] === Number(idData));

  // si existe el id, se actualiza el array de datos
  if (existId) {
    return arrayData.map((item) =>
      item[idField] === idData ? { ...item, ...updateFields } : item
    );
  }

  // si no existe el id, se agregan los nuevos datos
  const newItem = {
    [idField]: idData,
    ...updateFields,
  };

  return [...arrayData, newItem];
};
