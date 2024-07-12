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

export default apiGet;

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
