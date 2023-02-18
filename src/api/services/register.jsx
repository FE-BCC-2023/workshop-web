import { createAxiosInstance } from "../api";

const axiosInstance = createAxiosInstance();

const register = (email, password) => {
    try {
        const result = axiosInstance.post('/auth/register', {
            email,
            password
        })
        return result
    } catch (error) {
        console.log(error);
    }
}

export { register }
