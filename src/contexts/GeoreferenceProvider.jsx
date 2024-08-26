import { createContext, useCallback, useMemo, useState } from "react";

// inicialización del contexto
const GeoreferenceContext = createContext();

export const GeoreferenceProvider = ({ children, response }) => {
  // estado para los datos principales
  const [georeference, setGeoreference] = useState({
    data: response,
    numberGeoreference: response.length,
    error: null,
    loadDataState: true,
  });

  // función para actualizar los datos del objeto
  const updateGeoreferenceData = useCallback((newData) => {
    setGeoreference((prevData) => ({ ...prevData, ...newData }));
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
