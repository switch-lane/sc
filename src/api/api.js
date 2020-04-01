import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': '5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}

});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            // withCredentials: true
        })
            .then(response => {

                return  response.data
            })
    },
    getFollow(id = 2) {
        return instance.delete(`follow/${id}`, {
            // withCredentials: true,
            // headers: {'API-KEY': '5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
        })
            // .then(response => {
            //     return  response.data
            // })
    },
    getUnfollow(id = 2) {
        return instance.post(`follow/${id}`, {}, {
            // withCredentials: true,
            // headers: {'API-KEY':'5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
        })
            // .then(response => {
            //     return  response.data
            // })
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    getUpdateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
};

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
    },
    getLogin(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    getLoginout() {
        return instance.delete(`auth/login` )
    }
};


// export const getUsers = (currentPage = 1, pageSize = 10) => {
//
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         // withCredentials: true
//     })
//         .then(response => {
//
//            return  response.data
//         })
// };

// export const getFollow = (id = 2) => {
//     return instance.delete(`follow/${id}`, {
//         // withCredentials: true,
//         // headers: {'API-KEY': '5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
//     })
//         .then(response => {
//             return  response.data
//         })
// };
// export const getUnfollow = (id = 2) => {
//     return instance.post(`follow/${id}`, {}, {
//         // withCredentials: true,
//         // headers: {'API-KEY':'5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
//     })
//         .then(response => {
//             return  response.data
//         })
// };
//
