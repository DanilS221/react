import state from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsItem:[
        {id:1, text:'Привет , это  тоестовый пост', like:55},
        {id:2, text:'Меня зовут Данил', like:33},
    ],
    newPostText: '',
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                like: 0
            }

            state.postsItem.push(newPost);
            state.newPostText = '';
            return state;// работает совсметно с методом updateNewPostText, а именно пушит в наш массив с постами новый элемент (новый пост)


        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;// вызывается каждый раз когда в текст арею вводжится символ, этот симфол попадает в наш стейт в поле newPostText и сохраняется там , что бы потом addPost() добавил на основе этого текста что сохранен в поле  newPostText новый пост


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



export default profileReducer;