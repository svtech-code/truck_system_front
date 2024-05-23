import axios from "./axios";

const apiDelete = async ({ route, param }) => {
  const DATA_URL = param ? `${route}/${param}` : `${route}`;
  const token = sessionStorage.getItem("authToken") ?? null;

  const response = await axios.delete(DATA_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response;
};

export default apiDelete;
