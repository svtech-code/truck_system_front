import { Select, SelectItem } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import apiPut from "../api/apiPut";

const SelectComponent = ({
  arrayDataForSelect, // Array con objeto de tados para listar
  arrayContextData, // array con los datos completos del contexto, para actualizar sin get, (opcional)
  updateContextData, // función para actualizar los datos del contexto (opcional)
  nameDataContext, // nombre de la propiedad que tiene los datos del contexto (opcional)
  nameCodDataInArray, // nombre de la propiedad id del objeto para consultas
  nameDescDataInArray, // nombre de la propiedad descripción del objeto para consultar
  nameCodDataInContext, // nombre de la prpiedad del objeto contexto
  codPrimaryDataContext, // codigo del objeto primario, para actualizar estados u otro dato
  nameCodPrimaryDataContext, // nombre de la propiedad que hace referencia al codigo del objeto primario
  label, // label del select  (opcional, uso en formularios)
  isRequired = false, // requerimiento del elemento (opcional, uso en formularios)
  isInvalid = false, // validació del elemento (opcional, uso en formularios)
  errorMessage = false, // mensaje de error (opcional, uso en formularios)
  name, // nombre del campo formik (opcional, uso en formularios)
  setFieldValue, // función para actualizar el valor en formik (opcional, uso en formularios)
  loadForDesc, // para vargar valor del select por medio de la descripción (opcional, uso en formularisos)
  loadForCod, // para cargar valor del select por medio del código (opcional, uso en formularios)
  arrayRowDataTable, // valor de la fila a modificar (opcional, solo para editar datos de una fila)
  routeUpdate, // ruta para actualizar datos (opciona)
  generatePayloadForUpdate, // función para generar datos de actualización (opcional para actualización de estados)
}) => {
  // variables state del componente
  const [varState, setVarState] = useState({
    loading: true, // estado de carga (loading)
    selectedValue: new Set([]), // valor seleccioando (selectedValue)
  });

  // actualizador de los estados del componente
  const updateVarState = useCallback((newValue) => {
    setVarState((preValue) => ({ ...preValue, ...newValue }));
  }, []);

  // use effect para cargar select en la edición de datos, por codigo y/o descripción
  useEffect(() => {
    // carga el select por medio del codigo
    // if (loadForCod) {
    //   updateVarState({
    // loading: false,
    //     selectedValue: new Set([loadForCod.toString()]),
    //   });
    //   return;
    // }

    // // carga del select por medio de la descripción
    // if (loadForDesc && loadForDesc !== "" && arrayDataForSelect.length > 0) {
    //   const arrayForDesc = arrayDataForSelect.find(
    //     (item) => item[nameDescDataInArray] === loadForDesc
    //   );

    //   // asignación del select
    //   updateVarState({
    //     loading: false,
    //     selectedValue: new Set([arrayForDesc[nameCodDataInArray].toString()]),
    //   });

    //   // controlar el uso de setFieldValue, solo si esta presente (solo para formularios)
    //   if (setFieldValue) {
    //     setFieldValue(name, arrayForDesc[nameCodDataInArray].toString());
    //   }
    //   return;
    // }

    const loadSelectedValue = () => {
      if (loadForCod) {
        // carga el select por medio del codigo
        updateVarState({
          loading: false,
          selectedValue: new Set([loadForCod.toString()]),
        });
      } else if (loadForDesc && arrayDataForSelect.length > 0) {
        const arrayForDesc = arrayDataForSelect.find(
          (item) => item[nameDescDataInArray] === loadForDesc
        );

        if (arrayForDesc) {
          updateVarState({
            loading: false,
            selectedValue: new Set([
              arrayForDesc[nameCodDataInArray].toString(),
            ]),
          });

          // controlar el uso de setFieldValue, solo si esta presente (solo para formularios)
          if (setFieldValue) {
            setFieldValue(name, arrayForDesc[nameCodDataInArray].toString());
          }
        }
      }
    };

    loadSelectedValue();
  }, [arrayDataForSelect]);

  // creación de estilos para alerta sweetAlert
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "bg-blue-500 rounded-lg px-3 py-2 text-white mx-2",
      cancelButton: "bg-red-500 rounded-lg px-3 py-2 text-white mx-2",
    },
    buttonsStyling: false,
  });

  // creación de la alerta personalizada
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    showCancelButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // función para asignar valor al seleccionar un dato
  const handleSelectedValue = (newValue) => {
    const selectedKey = newValue === undefined ? null : newValue;

    if (codPrimaryDataContext) {
      // manejo de cambio de estado fuera de un formulario
      swalWithBootstrapButtons
        .fire({
          title: "Confirmar modificación",
          text: "Esta seguro de realizar la modificación ?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            // obtención de los datos para actualización
            const payload = generatePayloadForUpdate(selectedKey);

            // update de datos mediante apiPut
            apiPut({
              route: `${routeUpdate}/${codPrimaryDataContext}`,
              object: payload,
            }).then((res) => {
              // actualización de la data del select
              updateVarState({ selectedValue: new Set([selectedKey]) });

              // array con datos del contexto actualizado
              const newContextData = arrayContextData.map((item) =>
                item[nameCodPrimaryDataContext] === codPrimaryDataContext
                  ? {
                      ...item,
                      [nameCodDataInContext]: selectedKey,
                    }
                  : item
              );

              // actualización del contexto de datos
              updateContextData({
                [nameDataContext]: newContextData,
              });

              // actualización de los datos de contexto
              Toast.fire({
                icon: "success",
                title: "Modificación de datos exitosa",
              });
            });
          }
        });
    } else {
      // manejo del select para entorno dentro de un formulario
      setFieldValue(name, selectedKey);
      updateVarState({ selectedValue: new Set([selectedKey]) });
    }
  };

  return (
    <Select
      aria-label="select data"
      placeholder={
        label ? null : varState.loading ? "Cargando ..." : "Seleccionar"
      }
      label={label ? label : null}
      labelPlacement="outside"
      size="md"
      variant="faded"
      color="primary"
      isRequired={isRequired}
      isLoading={label ? false : varState.loading}
      selectedKeys={varState.selectedValue}
      onSelectionChange={(key) => handleSelectedValue(key.currentKey)}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    >
      {arrayDataForSelect.map((item) => (
        <SelectItem key={item[nameCodDataInArray]}>
          {item[nameDescDataInArray]}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
