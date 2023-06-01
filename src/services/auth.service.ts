import axios, { type AxiosResponse } from "axios";
import { getBaseURL } from "$lib/utils";
import type { YnoverflowResponse } from "@models/Error";

type LoginDTO = {
    email: string;
    password: string;
}

type RegisterDTO = {
    email: string;
    username: string;
    password: string;
    verifyPassword: string;
}

const login = async ({ email, password }: LoginDTO): Promise<AxiosResponse<YnoverflowResponse<{
    token: string
}>>> => {
    return axios.post(`${getBaseURL()}/user/login`, { email, password });
}

const register = async ({ email, username, password, verifyPassword }: RegisterDTO): Promise<AxiosResponse<YnoverflowResponse<{
    token: string
}>>> => {
    return axios.post(`${getBaseURL()}/user/register`, { email, username, password, verifyPassword });
}

export default {
    login,
    register
}