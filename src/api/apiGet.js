import { useCallback, useState } from "react";
import axios from "./axios";

const apiGet = async ({ route, param }) => {
  const DATA_URL = param ? `${route}/${param}` : `${route}`;
  const token = sessionStorage.getItem("authToken") ?? null;

  const response = await axios.get(DATA_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
};

export const getData = async ({ endPoint }) => {
  try {
    const getDataResponse = await apiGet({ route: endPoint });
    const response = await getDataResponse?.data;

    return { response };
  } catch (error) {
    return { error };
    // throw new Error(error.message);
  }
};

// export const getDataSelect = async ({ endPoint }) => {
//   // estado de la functión get
//   const [stateGet, setStateGet] = useState({
//     response: [],
//     error: null,
//     isLoading: false,
//   });

//   // actualizador del estado de la función get
//   const updateStateGet = useCallback((newState) => {
//     setStateGet((prevState) => ({ ...prevState, ...newState }));
//   }, []);

//   try {
//     updateStateGet({ isLoading: true });
//     const getDataResponse = await apiGet({ route: endPoint });
//     updateStateGet({ response: await getDataResponse?.data });
//   } catch (error) {
//     updateStateGet({ error: error });
//   } finally {
//     updateStateGet({ isLoading: false });
//   }

//   return {
//     response: stateGet.response,
//     error: stateGet.error,
//     isLoading: stateGet.isLoading,
//   };
// };

export default apiGet;
