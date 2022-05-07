import axios from 'axios';
import type { LoginUser, RegisterUser } from '../models/user';

type Http = {
    http: any,
    login: (user: LoginUser) => Promise<Boolean>,
    register: (user: RegisterUser) => Promise<Boolean>,
    token: string,
};

const http: Http = {
    http: axios.create({baseURL: "127.0.0.1:8080"}),
    login: async (user: LoginUser) => {
        const response = await axios.post('/login', user);
        if (response.status !== 200)
            return false;
        http.token = response.data;
        return true;
    },
    register: async (user: RegisterUser) => {
        const response = await axios.post('/register', user);
        if (response.status !== 200)
            return false;
        http.token = response.data;
        return true;
    },
    token: "",
};

export default http;