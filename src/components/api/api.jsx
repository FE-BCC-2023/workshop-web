import axios from "axios"

const createAxiosInstance = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://tweet-api.up.railway.app/api/v1/'
    })

    return axiosInstance
}

export { createAxiosInstance }
