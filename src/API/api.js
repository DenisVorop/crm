
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

export const authAPI = {
    getAuthAdmin() {
        return instance.get('/admin')
    }
}

export const lastRecordsAPI = {
    getAllLastRecords() {
        return instance.get('/last-records')
    }
}
