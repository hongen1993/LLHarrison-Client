import axios from 'axios'

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL + `/${path}`
        })
        this.axios.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
}

export default InitAxios