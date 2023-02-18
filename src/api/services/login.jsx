import { createAxiosInstance } from "../api";

const axiosInstance = createAxiosInstance();

const login = (email, password) => {
    try {
        const result = axiosInstance.post('/auth/login', {
            email,
            password
        })
        return result
    } catch (error) {
        console.log(error);
    }
}

export { login }
