import { createContext, useCallback, useMemo, useState } from "react";

// inicialización del contexto
const LoadingOrderContext = createContext({});

// función para calcular valores con base en el array de datos
const calculateDeriveData = (data) => {
  return {
    numberOrders: data.length,
  };
};

export const LoadingOrderProvider = ({ children, response }) => {
  // estado para los datos principales
  const [loadingOrderData, setLoadingOrderData] = useState({
    data: response, // objeto con los datos de ordenes de carga
    dataCars: [], // objeto con la información de los vehículos
    dataTaxpayers: [], // objeto con la información de los contribuyente
    georeferences: [], // objeto con la información de las georeferencias
    dataCoupled: [], // objeto con la iformación de los acoplados
    dataDriver: [], // objeto con la información de 1 chofer
    ...calculateDeriveData(response),
  });

  // función para actualizar los datos del objeto y sus cantidades
  const updateLoadingOrder = useCallback((newData) => {
    setLoadingOrderData((prevData) => {
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
      updateLoadingOrder,
      ...loadingOrderData,
    }),
    [updateLoadingOrder, loadingOrderData]
  );

  return (
    <LoadingOrderContext.Provider value={value}>
      {children}
    </LoadingOrderContext.Provider>
  );
};

export default LoadingOrderContext;
