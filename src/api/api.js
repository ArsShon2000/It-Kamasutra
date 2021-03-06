import axios from "axios";
import { follow } from "../redux/usersReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "496ab2a7-82c0-4b3f-9ca5-14a365648a52"
    }
})

export const usersAPI = {
    async getUsers(currentPage = 1, pagesSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pagesSize}`);
        return response.data;
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    } 

}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

