import axios from "axios";


const instance = axios.create({
     baseURL: "https://social-network.samuraijs.com/api/1.0/",
     withCredentials: true,
     headers:{"API-KEY":"03ec0d9e-36ac-4a9f-aef6-ae2502fce9a3"}
})

export const usersAPI = {
     getUsers(currentPage = 1, pageSize = 10)
     {
          return instance.get(`users?page=${currentPage}&count=${pageSize}`)
              .then(response=>{ return response.data})
     },

     follow(usersID){
       return instance.post(`follow/${usersID}`)
           .then(response=>{ return response.data})
     },

     unFollow(usersID){
       return instance.delete(`follow/${usersID}`)
           .then(response=>{ return response.data})
     },

     getProfile(usersID){
          console.warn("Используется getProfile из usersAPI, он устарел. Пожалуйста , используй getProfile из profileAPI ")
          return profileAPI.getProfile(usersID)
     }


}


export const profileAPI = {
     getProfile(usersID){
          return instance.get(`profile/${usersID}`).then((response) => {return response.data})
     },

     getStatus(usersID){
          return instance.get(`profile/status/${usersID}`).then((response) => {return response})
     },
     updateStatus(status){
          return instance.put(`profile/status` ,{status:status} )
     }
}



export const headerAPI = {
     authorization(){
          return instance.get(`auth/me`)
     },

     login(email, password, rememberMe=false){
          return instance.post(`auth/login`, {email, password, rememberMe})
     },

     logout(){
          return instance.delete(`auth/login`)
     }
}

