import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/V1.0",
    timeout: 6000,
    headers: {}
});

export default http;