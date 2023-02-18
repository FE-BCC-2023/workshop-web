import axios from "axios"

const createAxiosInstance = (token) => {
    const axiosInstance = axios.create({
        baseURL: 'https://tweet-api.up.railway.app/api/v1',
        headers: {
            Authorization: typeof token === "string" ? `Bearer ${token}` : '' 
        }
    })

    return axiosInstance
}

export { createAxiosInstance }
