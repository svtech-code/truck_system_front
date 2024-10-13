import { createContext, useCallback, useMemo, useState } from "react";

// inicialización del contexto
const DriverContext = createContext({});

// función para calcular los valores coxn base en el array de datos
const calculateDeriveData = (data) => {
  return {
    numberDrivers: data.length, // cantidad de choferes
    // agregar mas datos de cantidades
  };
};

export const DriverProvider = ({ children, response }) => {
  // estado de los datos principales
  const [driverData, setDriverData] = useState({
    data: response, // objeto con los datos de los choferes
    error: null,
    loadDataState: true,
    ...calculateDeriveData(response),
  });

  // función para actualizar datos y cantidades
  const updateDriverData = useCallback((newData) => {
    setDriverData((prevData) => {
      const updateData = { ...prevData, ...newData };

      // recalcular los valores derivados cuando cambia un dato
      if (newData.data) {
        const derivedData = calculateDeriveData(newData.data);
        return { ...updateData, ...derivedData };
      }

      return updateData;
    });
  }, []);

  // memorización de los datos del contexto
  const value = useMemo(
    () => ({
      updateDriverData,
      ...driverData,
    }),
    [updateDriverData, driverData]
  );

  return (
    <DriverContext.Provider value={value}>{children}</DriverContext.Provider>
  );
};

export default DriverContext;
