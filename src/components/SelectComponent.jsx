import { Select, SelectItem } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";

const SelectComponent = ({
  listData, // objeto con la lista para mostrar
  codDataArray, // nombre de la propiedad id del objeto lista para la consulta
  descDataArray, // nombre de la descripción del objeto lista para la consulta
  codData, // nombre de la propiedad id del objeto para el componente para el submit
  descData, // nombre de la descripción del objeto para el componente para el submit
  label, // label del select, idealmente para formularios
  isRequired = false, // requerimiento, solo para formularios
  isInvalid, // parametro de validación, solo para formularios
  errorMessage, // mensaje de error, solo para formularios
  name, // nombre del campo formik, solo para formularios
  setFieldValue, // función para actualizar el valor en formik, solo para formularios
  formImplement, // para uso en formularios
  loadForDesc, // si hay que cargar valor por la descripción
  loadForCod, // si hay que cargar valor por el codigo
}) => {
  // variables state del componente
  const [varState, setVarState] = useState({
    loading: false, // estado de carga (loading)
    selectedValue: new Set([]), // valor seleccioando (selectedValue)
  });

  // actualizador de los estados del componente
  const updateVarState = useCallback((newValue) => {
    setVarState((preValue) => ({ ...preValue, ...newValue }));
  }, []);

  // use effect para cargar select en la edición de datos, por codigo y/o descripción
  useEffect(() => {
    // carga el select por medio del codigo
    if (loadForCod && loadForCod !== null) {
      updateVarState({ selectedValue: new Set([loadForCod.toString()]) });
      return;
    }

    // carga del select por medio de la descripción
    if (loadForDesc && loadForDesc !== "") {
      const arrayForDesc = listData.find(
        (item) => item[descDataArray] === loadForDesc
      );
      // asignación del select
      updateVarState({
        selectedValue: new Set([arrayForDesc[codDataArray].toString()]),
      });

      // asignación del value de datos
      setFieldValue(name, arrayForDesc[codDataArray].toString());
      return;
    }
  }, []);

  // función para asignar valor al seleccionar un dato
  const handleSelectedValue = (newValue) => {
    // manejo del select para entorno dentro de un formulario
    if (formImplement) {
      updateVarState({ selectedValue: new Set([newValue]) });
      setFieldValue(name, newValue);

      // // para asignar la descripción del transportista
      // if (loadForCod && loadForCod !== null) {
      //   const newArray = listData.find(
      //     (item) => item[codData].toString() === newValue.toString()
      //   );
      //   setFieldValue(descData, newArray.desc_contribuyente);
      // }

      return;
    }

    console.log("trabajo fuera de un formulario");
  };

  return (
    <Select
      aria-label="select data"
      labelPlacement="outside"
      label={varState.loading ? "Cargando..." : label}
      size="md"
      variant="faded"
      color="primary"
      isRequired={isRequired}
      isLoading={varState.loading}
      selectedKeys={varState.selectedValue}
      onSelectionChange={(key) => handleSelectedValue(key.currentKey)}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    >
      {listData.map((item) => (
        <SelectItem key={item[codDataArray]}>{item[descDataArray]}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
