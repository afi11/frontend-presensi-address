import Auth from "./auth";

export const APISettings = {
    token: '',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ Auth.checkUserLoggin()
    },
    baseURL: 'http://localhost:9000',
}