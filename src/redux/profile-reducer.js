import state from "./store";
import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsItem:[
        {id:1, text:'Привет , это  тоестовый пост', like:55},
        {id:2, text:'Меня зовут Данил', like:33},
    ],
    newPostText: '',
    profile: null,
    status: '---',

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                like: 0
            }

            return {
                ...state,
                newPostText:'',
                postsItem:[...state.postsItem, newPost]
            };
        }// работает совсметно с методом updateNewPostText, а именно пушит в наш массив с постами новый элемент (новый пост)


        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newText
            };
        }// вызывается каждый раз когда в текст арею вводжится символ, этот симфол попадает в наш стейт в поле newPostText и сохраняется там , что бы потом addPost() добавил на основе этого текста что сохранен в поле  newPostText новый пост

            case SET_PROFILE: {
                return {
                    ...state,
                    profile: action.profile

                }
            }


            case SET_STATUS: {
                return {
                    ...state,
                    status: action.status
                }
            }

        default:
            return state;

    }

}



export const addPostActionCreator=()=>({type: ADD_POST})
// export const addPostActionCreator=()=>{
//     return {
//         type: ADD_POST,
//     }
// }
// ТОЖЕ САМОЕ ЧТО И ВЫШЕ , ПРОСТО УБРАЛ СЛОВО RETURN


export const updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT,newText: text})
export const setProfileAC=(profile)=>({type: SET_PROFILE, profile})
export const setStatusAC=(status)=>({type: SET_STATUS, status})



export const getUserProfileThunkCreator=(userId)=> {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then((data)=>{
                dispatch(setProfileAC(data))
            })
    }
}

export const getStatusThunkCreator=(userId)=> {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((response)=>{
                dispatch(setStatusAC(response.data))
            })
        console.log("ОТРАБОТАЛ")

    }
}

export const updateStatusThunkCreator=(status)=> {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((response)=>{
                if(response.data.resultCode===0){
                    dispatch(setStatusAC(status))
                }

            })
    }
}



export default profileReducer;