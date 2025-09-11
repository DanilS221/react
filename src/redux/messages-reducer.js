import profileReducer from "./profile-reducer";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs:[
        {id:1, name:'Danil' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},
        {id:2, name:'Roman' , avatar:"https://pandorabox.by/img/reviews/no-foto.png"},
        {id:3, name:'Andray' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},
        {id:4, name:'Alex' , avatar:"https://pandorabox.by/img/reviews/no-foto.png"},
        {id:5, name:'Den' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},

    ],
    messages:[
        {id:1, text:'HELLO'},
        {id:2, text:'JS'},
        {id:3, text:'OK'},
    ],
    newMessageText: ''

}

const messagesReducer = (state = initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return{
                ...state,
            newMessageText: action.newMesText
            };



        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                text: state.newMessageText,
            }

            return{
                ...state,
                newMessageText: '',
                messages:[...state.messages, newMessage]
            };


            
        default:
            return state;
    }

}


export const updateNewMessageTextActionCreator=(text)=>({type: UPDATE_NEW_MESSAGE_TEXT, newMesText: text})
export const addNewMessageActionCreator=()=>({type: SEND_MESSAGE})


export default messagesReducer;