import { createAxiosInstance } from "../api";

const axiosInstance = createAxiosInstance();

const editTweet = (token, tweet) => {
    const { id, title, description } = tweet;

    try {
        const result = axiosInstance.put('/tweet/update', {
            title,
            description,
            id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return result
    } catch (error) {
        console.error(error);
    }
}

export { editTweet }
