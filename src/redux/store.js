import {type} from "@testing-library/user-event/dist/type";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";




let store =  {
    _state:{
        profilePage:{
            postsItem:[
                {id:1, text:'Привет , это  тоестовый пост', like:55},
                {id:2, text:'Меня зовут Данил', like:33},
            ],
            newPostText: '',
        },
        messagesPage:{
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

        },
        friends:{
            friend:[
                {id:1, name:'Danil' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},
                {id:2, name:'Roman' , avatar:"https://pandorabox.by/img/reviews/no-foto.png"},
                {id:3, name:'Andray' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},

            ],}
    },// своего рода хранилище для рахличных данных

    _callSubscrider (){


        },// используется в качестве паеременной для колбэка приходящего в   subscribe (observer) и применяющийся для ререндора странички
    subscribe (observer){
        this._callSubscrider = observer
    },// принимает коллбэк из индекса , а именно ререндер функцию, которая обновляет сттаничку
    getState (){
                return this._state;
        },//нужен для получения стьейта их вне, так как стейт приватное поле

    dispatch(action){

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
       this._state.friends = friendsReducer(this._state.friends, action);

       this._callSubscrider(this._state)
    }

}



















export default store