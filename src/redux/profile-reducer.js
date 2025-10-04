
import {profileAPI, usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsItem:[
        {id:1, text:'Привет , это  тоестовый пост', like:55},
        {id:2, text:'Меня зовут Данил', like:33},
    ],

    profile: null,
    status: '---',

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: action.textNewPost,
                like: 0
            }

            return {
                ...state,
                postsItem:[...state.postsItem, newPost]
            };
        }// работает совсметно с методом updateNewPostText, а именно пушит в наш массив с постами новый элемент (новый пост)


        // case UPDATE_NEW_POST_TEXT:{
        //     return{
        //         ...state,
        //         newPostText:action.newText
        //     };
        // }// вызывается каждый раз когда в текст арею вводжится символ, этот симфол попадает в наш стейт в поле newPostText и сохраняется там , что бы потом addPost() добавил на основе этого текста что сохранен в поле  newPostText новый пост

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
            case DELETE_POST: {
                return {
                    ...state,
                    postsItem: state.postsItem.filter(post => post.id !== action.PostId)
                }
            }

        default:
            return state;

    }

}



export const addPostActionCreator=(textNewPost)=>({type: ADD_POST,textNewPost})
// export const addPostActionCreator=()=>{
//     return {
//         type: ADD_POST,
//     }
// }
// ТОЖЕ САМОЕ ЧТО И ВЫШЕ , ПРОСТО УБРАЛ СЛОВО RETURN


// export const updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT,newText: text})
export const setProfileAC=(profile)=>({type: SET_PROFILE, profile})
export const setStatusAC=(status)=>({type: SET_STATUS, status})
export const deletePostAC=(PostId)=>({type: DELETE_POST, PostId})



export const getUserProfileThunkCreator=(userId)=>
    async (dispatch) => {
       let data = await usersAPI.getProfile(userId)
                dispatch(setProfileAC(data))
    }


export const getStatusThunkCreator=(userId)=>
    async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
                dispatch(setStatusAC(response.data))
        console.log("ОТРАБОТАЛ")
}

export const updateStatusThunkCreator=(status)=>
    async (dispatch) => {
        let response = await profileAPI.updateStatus(status)

                if(response.data.resultCode===0){
                    dispatch(setStatusAC(status))
                }
    }




export default profileReducer;