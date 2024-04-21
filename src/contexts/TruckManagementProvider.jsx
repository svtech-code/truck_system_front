import { Children, createContext, useCallback, useMemo, useState } from "react";

const TruckManagementContext = createContext({});

export const TruckManagementProvider = ({ Children }) => {
  const [TruckManagementData, setTruckManagementData] = useState({
    truckData: [], // data de los camions
    truckNumber: 0, // cantidad de camiones
    truckNumberInspectionDue: 0, // cantidad de camiones con revisón por vencer
  });

  // función para actualizar los datos del objeto estado
  const updateTruckManagementData = useCallback((newData) => {
    setTruckManagementData((prevData) => ({ ...prevData, ...newData }));
  }, []);

  // memorizador de los datos del contexto
  const value = useMemo(
    () => ({
      updateTruckManagementData,
      ...TruckManagementData,
    }),
    [updateTruckManagementData, TruckManagementData]
  );

  return (
    <TruckManagementContext.Provider value={value}>
      {Children}
    </TruckManagementContext.Provider>
  );
};

export default TruckManagementContext;
