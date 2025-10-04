import {headerAPI, usersAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const SET_USER_PHOTOS = 'AUTH/SET_USER_PHOTOS';

let initialState = {
    id:null,
    login:null,
    email:null,
    photos:null,
    isFetching: false,
    isAuth: false,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_USER_PHOTOS:
            return {
                ...state,
                photos: action.photo,
            }
        default:
            return state;
    }
}

export const setUserDataAC = (id,login,email,isAuth) => ({type: SET_USER_DATA, data:{id,login,email,isAuth}})
export const setUserPhotoAC = (photo) => ({type: SET_USER_PHOTOS, photo})


export const autorizationThunk=()=>  async (dispatch)=>{
       let response =  await headerAPI.authorization()

                if(response.data.resultCode===0){

                    let {id, login,email}=response.data.data;
                    dispatch(setUserDataAC(id,login,email, true));
                    let data = await usersAPI.getProfile(id)
                            dispatch(setUserPhotoAC(data.photos.small));
                }

}

export const loginThunk = (email, password, rememberMe) =>  async (dispatch)=>{
       let response=  await headerAPI.login(email, password, rememberMe)
            if(response.data.resultCode===0){
                dispatch(autorizationThunk())
            }
            else {

                let messages = response.data.messages.length>0?response.data.messages[0]:"Ошибка";
                let action = stopSubmit("login", {_error: messages})
                dispatch(action)
            }
}

export const logoutThunk = () =>
    async (dispatch)=>{
        let response = await headerAPI.logout();
            if(response.data.resultCode===0){
                dispatch(setUserDataAC(null,null,null, false));
            }

    }

export default authReducer;