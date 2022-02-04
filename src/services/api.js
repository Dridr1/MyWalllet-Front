import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const tokenConfig = token => {
    return { headers: { Authorization: `Bearer ${token}` } };
}

export const signUp = body => {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);

    return promise;
}

export const signIn = body => {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);

    return promise;
}

export const getMovements = token => {
    const config = tokenConfig(token);

    const promise = axios.get(`${BASE_URL}/movements`, config);

    return promise;
}

export const newMovement = (body, token) => {
    const config = tokenConfig(token);

    const promise = axios.post(`${BASE_URL}/movements`, body, config);

    return promise;
}