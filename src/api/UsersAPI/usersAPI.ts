import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-redev.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export type NewUser = {
    email: string,
    password: string
}

type LoginResponseType = {
    token: string
}

export const usersAPI = {
    loginUser(data: NewUser) {
        return instance.post<LoginResponseType, AxiosResponse<LoginResponseType>, NewUser>('auth/login', data);
    }
}