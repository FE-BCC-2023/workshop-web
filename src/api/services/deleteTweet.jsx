import { createAxiosInstance } from "../api";

const axiosInstance = createAxiosInstance();

const deleteTweet = (token, id) => {
    try {
        const result = axiosInstance.delete('/tweet/delete', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                id
            }
        });

        return result
    } catch (error) {
        console.error(error);
    }
}

export { deleteTweet }
