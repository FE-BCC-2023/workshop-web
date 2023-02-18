import { createAxiosInstance } from "../api";

const axiosInstance = createAxiosInstance()

const logout = (token) => {
    try {
        const result = axiosInstance.post('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result
    } catch (error) {
        console.error(error);
    }
}

export { logout }
