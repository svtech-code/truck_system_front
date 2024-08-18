import { createContext, useCallback, useMemo, useState } from "react";

// inicialización del contexto
const TaxpayerContext = createContext({});

export const TaxpayerProvider = ({ children, response }) => {
  // estado para los datos principales
  const [taxpayerData, setTaxpayerData] = useState({
    data: response,
    numberTaxpayers: response.length,
    error: null,
  });

  // función para actualizar los datos del objeto
  const updateTaxpayerData = useCallback((newData) => {
    setTaxpayerData((prevData) => ({ ...prevData, ...newData }));
  }, []);

  // memorización de los datos del contexto
  const value = useMemo(
    () => ({
      updateTaxpayerData,
      ...taxpayerData,
    }),
    [updateTaxpayerData, taxpayerData]
  );

  return (
    <TaxpayerContext.Provider value={value}>
      {children}
    </TaxpayerContext.Provider>
  );
};

export default TaxpayerContext;
