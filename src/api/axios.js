import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:80/api", withCredentials: true
});

export default client;
