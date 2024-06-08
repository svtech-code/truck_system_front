import { createContext, useCallback, useMemo, useState } from "react";

// inicialización de contexto
const VehiculeContext = createContext({});

// función para filtrar cantidad de camiones con revisión técnica vencida
const filterByData = (array) => {
  const currentDate = new Date(); // obtención de la fecha actual

  const filterData = array.filter((item) => {
    const fechaRevision = new Date(item.fecha_vigencia_revision);
    return fechaRevision < currentDate;
  });

  return filterData;
};

export const VehiculoProvider = ({ children, response }) => {
  // estados para los datos principales
  const [vehicleData, setVehicleData] = useState({
    mainVehicleData: response, // datos primarios de los vehiculos

    numberOperationalVehicles: response?.filter(
      (item) => item?.desc_estado_vehiculo === "DISPONIBLE"
    ).length, // cantidad de vehiculos operativos

    numberMaintanceVehicle: response?.filter(
      (item) => item?.desc_estado_vehiculo === "MANTENIMIENTO"
    ).length, // cantidad de vehiculos en mantenimiento

    mainAcopladoData: response // ver como se trabajarán los acoplados
      ?.filter((item) => item.desc_tipo_vehiculo !== "CARRO"),
    // ?.map((item) => item?.patente), // lista de vehículos de tipo acomplado

    numberExpiredDocument: filterByData(response).length, // cantidad de vehiculos con documentos vencidos
    stateVehicle: [],
    driveList: [],
  });

  // función para actualizar los datos del objeto estado
  const updateVehicleData = useCallback((newData) => {
    setVehicleData((prevData) => ({ ...prevData, ...newData }));
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
