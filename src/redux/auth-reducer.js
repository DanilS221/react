import {headerAPI, usersAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTOS = 'SET_USER_PHOTOS';

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
                isAuth: true
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

export const setUserDataAC = (id,login,email) => ({type: SET_USER_DATA, data:{id,login,email}})
export const setUserPhotoAC = (photo) => ({type: SET_USER_PHOTOS, photo})


export const autorizationThunk=()=>{
    return(dispatch)=>{
        headerAPI.authorization()
            .then((response) => {
                if(response.data.resultCode===0){

                    let {id, login,email}=response.data.data;
                    dispatch(setUserDataAC(id,login,email));
                    usersAPI.getProfile(id)
                        .then((data) => {
                            dispatch(setUserPhotoAC(data.photos.small));

                        })
                }

            })
    }
}

export default authReducer;