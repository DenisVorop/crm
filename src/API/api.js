
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: '/',
});

export const usersAPI = {
    getAllUsers() {
        return instance.get('/users')
        // return instance.get('/users&_sort=time&_order=desc')
    },
    getAllTimeUsers() {
        return instance.get('/today-records')
    }
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
