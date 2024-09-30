import { createContext, useCallback, useMemo, useState } from "react";

// inicialización del contexto
const GeoreferenceContext = createContext({});

// función para calcular valores con base en el array de datos
const calculateDeriveData = (data) => {
  return {
    numberGeoreference: data.length, // cantidad de georeferencias
  };
};

export const GeoreferenceProvider = ({ children, response }) => {
  // estado para los datos principales
  const [georeference, setGeoreference] = useState({
    data: response, // objeto con los datos de georeferencias
    // numberGeoreference: response.length,
    commune: [], // objeto con los datos de las comunas
    error: null,
    loadDataState: true,
    ...calculateDeriveData(response),
  });

  // función para actualizar los datos del objeto
  const updateGeoreferenceData = useCallback((newData) => {
    setGeoreference((prevData) => {
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
      updateGeoreferenceData,
      ...georeference,
    }),
    [updateGeoreferenceData, georeference]
  );

  return (
    <GeoreferenceContext.Provider value={value}>
      {children}
    </GeoreferenceContext.Provider>
  );
};

export default GeoreferenceContext;
