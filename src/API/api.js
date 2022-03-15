
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: '/',
});

export const usersAPI = {
    getAllUsers() {
        return instance.get('/users')
    },
}

export const clinicsAPI = {
    getAllClinics() {
        return instance.get('/clinics')
    }
}
