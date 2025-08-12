import {rerenderEntireTree} from "../render";


let state={
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
        ]
    },
    friends:{
        friend:[
            {id:1, name:'Danil' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},
            {id:2, name:'Roman' , avatar:"https://pandorabox.by/img/reviews/no-foto.png"},
            {id:3, name:'Andray' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},

        ],}
}


export let addPost =() =>{

    let newPost = {
        id:5,
        text:state.profilePage.newPostText,
        like:0
    };

    state.profilePage.postsItem.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}




export default state