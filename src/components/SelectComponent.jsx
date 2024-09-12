import { Select, SelectItem } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";

const SelectComponent = ({
  listData, // objeto con la lista para mostrar
  codData, // nombre de la propiedad id del objeto
  descData, // nombre de la descripción a utilizar del objeto
  sizeSelect, // string del tamaño del elemento
  label, // label del select, idealmente para formularios
  isRequired = false, // requerimiento, solo para formularios
  isInvalid, // parametro de validación, solo para formularios
  errorMessage, // mensaje de error, solo para formularios
  name, // nombre del campo formik, solo para formularios
  setFieldValue, // función para actualizar el valor en formik, solo para formularios
  notFormImplement, // para uso fuera de formularios
  formImplement, // para uso en formularios
}) => {
  // variables state del componente
  const [varState, setVarState] = useState({
    loading: false, // estado de carga (loading)
    selectedValue: new Set([]), // valor seleccioando (selectedValue)
  });

  // actualizador de los estados del componente
  const updateVarState = useCallback((newValue) => {
    setVarState((preValue) => ({ ...preValue, ...newValue }));
  });

  const handleSelectedValue = (newValue) => {
    // controlar si la selección es la misma que el valor acutual
    // if (!newValue) return;
    updateVarState({ selectedValue: new Set([newValue]) });
    setFieldValue(name, newValue);
  };

  return (
    <Select
      aria-label="select data"
      labelPlacement="outside"
      label={varState.loading ? "Cargando..." : label}
      size={sizeSelect}
      variant="bordered"
      color="primary"
      isRequired={isRequired}
      isLoading={varState.loading}
      selectedKeys={varState.selectedValue}
      onSelectionChange={(key) => handleSelectedValue(key.currentKey)}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    >
      {listData.map((item) => (
        <SelectItem key={item[codData]}>{item[descData]}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
