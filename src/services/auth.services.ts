import http from "./http";
import { ILogin, ILoginResponse, IRegister, IRegisterResponse, IResponse } from "./types";


const AUTH_BASE_URL = `${import.meta.env.VITE_BASE_URL}/auth`;

const login = async (payload : ILogin): Promise<IResponse<ILoginResponse>> => http.post({
  url: `${AUTH_BASE_URL}/login`,
  body: JSON.stringify(payload),
});

const register = async (payload : IRegister): Promise<IRegisterResponse> => http.post({
  url: `${AUTH_BASE_URL}/register`,
  body: JSON.stringify(payload),
});


export const authServices = {
    login,
    register
}