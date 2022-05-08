import axios from 'axios';
import type { LoginUser, RegisterUser } from '../models/user';

type Http = {
    http: any,
    login: (user: LoginUser) => Promise<Boolean>,
    register: (user: RegisterUser) => Promise<Boolean>,
    token: string,
};

const http: Http = {
    http: axios.create({baseURL: "http://127.0.0.1:8080"}),
    login: async (user: LoginUser) => {
        const response = await http.http.post('/login', user);
        if (response.status !== 200)
            return false;
        http.token = response.data;
        return true;
    },
    register: async (user: RegisterUser) => {
        const response = await http.http.post('/register', user);
        console.log(response.data);
        if (response.status !== 200)
            return false;
        http.token = response.data;
        return true;
    },
    token: "",
};

export default http;