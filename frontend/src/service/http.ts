import axios from 'axios';
import type { LoginUser, RegisterUser, User } from '../models/user';

type Http = {
    http: any,
    login: (user: LoginUser) => Promise<boolean>,
    register: (user: RegisterUser) => Promise<boolean>,
    token: string,
    createNft: (user: string) => Promise<boolean>
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
    createNft: async (wallet: string) => {
        const response = await http.http.post('/nft/baby-sponge-bob/' + wallet);
        if (response.status !== 200)
            return false;
        return true;
    }
};

export default http;