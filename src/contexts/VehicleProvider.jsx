import { createContext, useCallback, useMemo, useState } from "react";

// inicialización de contexto
const VehiculeContext = createContext({});

// función para filtrar cantidad de camiones con revisión técnica vencida
const filterByData = (array) => {
  const currentDate = new Date(); // obtención de la fecha actual

  return array.filter(
    (item) => new Date(item.fecha_vigencia_revision) < currentDate
  );
};

// función para calcular valores con base en el array de datos
const calculateDeriveData = (data) => {
  return {
    numberExpiredDocument: filterByData(data).length, // cantidad de vehiculos con documentos de revisión vencidos

    numberOperationalVehicles: data?.filter(
      (item) => item?.desc_estado_vehiculo === "DISPONIBLE"
    ).length, // cantidad de vehiculos operativos

    numberMaintanceVehicle: data?.filter(
      (item) => item?.desc_estado_vehiculo === "MANTENIMIENTO"
    ).length, // cantidad de vehiculos en mantenimiento

    mainAcopladoData: data // ver como se trabajarán los acoplados
      ?.filter((item) => item.desc_tipo_vehiculo === "CARRO")
      ?.filter((item) => item.desc_estado_vehiculo === "DISPONIBLE"),
  };
};

export const VehiculoProvider = ({ children, response }) => {
  // estados para los datos principales
  const [vehicleData, setVehicleData] = useState({
    data: response, // datos primarios de los vehiculos
    stateVehicle: [], // estados de un vehículo
    brandVehicle: [], // marcas de vehiculo
    modelVehicle: [], // modelos de vehículo
    typeVehicle: [], // tipos de vehículos
    drivers: [], // lista de choferes
    taxpayers: [], // lista de transportistas (contribuyentes)
    edit: false, // estado para edición de datos
    idEdit: null, // id del valor a ser editado
    descriptionEdit: null, // descripción del valor a ser editado
    error: null, // estado para almacenar los errores
    loadDataState: true,
    ...calculateDeriveData(response), // calculo de los valores de las tarjetas
  });

  // función para actualizar los datos del objeto estado
  const updateVehicleData = useCallback((newData) => {
    setVehicleData((prevData) => {
      const updatedData = { ...prevData, ...newData };

      // recalcular los valores derivados cuando cambian los datos
      if (newData.data) {
        const derivedData = calculateDeriveData(newData.data);
        return { ...updatedData, ...derivedData };
      }

      return updatedData;
    });
  }, []);

  // memorización de los datos del contexto
  const value = useMemo(
    () => ({
      updateVehicleData,
      ...vehicleData,
    }),
    [updateVehicleData, vehicleData]
  );

  return (
    <VehiculeContext.Provider value={value}>
      {children}
    </VehiculeContext.Provider>
  );
};

export default VehiculeContext;
