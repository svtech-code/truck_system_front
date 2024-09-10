import { createContext, useCallback, useMemo, useState } from "react";

// inicialización del contexto
const TaxpayerContext = createContext({});

// función para calcular valores con base en el array de datos
const calculateDeriveData = (data) => {
  return {
    numberTaxpayers: data.length, // cantidad de contribuyentes
    // pasar a contribuyentes activos e innactivos
  };
};

export const TaxpayerProvider = ({ children, response }) => {
  // estado para los datos principales
  const [taxpayerData, setTaxpayerData] = useState({
    data: response, // objeto con los datos de contribuyentes
    commune: [], // objeto con los datos de comunas
    georeference: [], // objeto los datos de georeferencias
    error: null,
    loadDataState: true,
    ...calculateDeriveData(response),
  });

  // función para actualizar los datos del objeto y sus cantidades
  const updateTaxpayerData = useCallback((newData) => {
    setTaxpayerData((prevData) => {
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
