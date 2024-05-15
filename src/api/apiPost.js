import axios from "./axios";

const apiPost = async ({route, object}) => {
    const DATA_URL = route;
    const token = sessionStorage.getItem("authToken") ?? null;

    const response = await axios.post(
        DATA_URL, object, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Context-Type": "application/json",
            },
        }
    );

    return response;
}

export default apiPost;