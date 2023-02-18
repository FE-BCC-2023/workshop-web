import { createAxiosInstance } from "../api";

const axiosInstance = createAxiosInstance();

const getTweet = (token) => {
    try {
        const result = axiosInstance.get('/tweet/all', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return result
    } catch (error) {
        console.error(error);
    }
}

export { getTweet }
