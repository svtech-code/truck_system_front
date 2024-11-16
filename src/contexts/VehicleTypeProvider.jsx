import { createContext, useCallback, useMemo, useState } from "react";

const VehicleTypeContext = createContext({});

const calculateDeriveData = (data) => {
  return {
    numberVehicleType: data.length,
  };
};

export const VehicleTypeProvider = ({ children, response }) => {
  const [vehicleTypeData, setVehicleTypeData] = useState({
    data: response,
    error: null,
    loadDataState: true,
    ...calculateDeriveData(response),
  });

  const updateVehicleTypeData = useCallback((newData) => {
    setVehicleTypeData((prevData) => {
      const updatedData = { ...prevData, ...newData };

      // recalcular los valores derivados cuando cambian los datos
      if (newData.data) {
        const derivedData = calculateDeriveData(newData.data);
        return { ...updatedData, ...derivedData };
      }

      return updatedData;
    });
  }, []);

  const value = useMemo(
    () => ({
      updateVehicleTypeData,
      ...vehicleTypeData,
    }),
    [updateVehicleTypeData, vehicleTypeData]
  );

  return (
    <VehicleTypeContext.Provider value={value}>
      {children}
    </VehicleTypeContext.Provider>
  );
};

export default VehicleTypeContext;
