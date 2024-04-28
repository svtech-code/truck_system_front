import { createContext, useCallback, useMemo, useState } from "react";

const TruckContext = createContext({});

export const TruckProvider = ({ children }) => {
  const [TruckData, setTruckData] = useState({
    truckData: [], // data de los camions
    truckNumber: 0, // cantidad de camiones operativos
    truckNumberInspectionDue: 0, // cantidad de camiones con revisón por vencer
  });

  // función para actualizar los datos del objeto estado
  const updateTruckData = useCallback((newData) => {
    setTruckData((prevData) => ({ ...prevData, ...newData }));
  }, []);

  // memorizador de los datos del contexto
  const value = useMemo(
    () => ({
      updateTruckData,
      ...TruckData,
    }),
    [updateTruckData, TruckData]
  );

  return (
    <TruckContext.Provider value={value}>{children}</TruckContext.Provider>
  );
};

export default TruckContext;
