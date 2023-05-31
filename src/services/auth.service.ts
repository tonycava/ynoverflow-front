import axios, { type AxiosResponse } from "axios";
import { getBaseURL } from "$lib/utils";
import type { YnoverflowResponse } from "@models/Error";

type LoginDTO = {
    email: string;
    password: string;
}

const login = async ({ email, password }: LoginDTO): Promise<AxiosResponse<YnoverflowResponse<{
    token: string
}>>> => {
    return axios.post(`${getBaseURL()}/auth/login`, { email, password });
}

export default {
    login
}