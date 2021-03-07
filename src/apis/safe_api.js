import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://csafe-server.herokuapp.com"
})

export default axiosInstance;