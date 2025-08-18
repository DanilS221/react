import state from "./store";

 let initialState = {
     friend:[
         {id:1, name:'Danil' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},
         {id:2, name:'Roman' , avatar:"https://pandorabox.by/img/reviews/no-foto.png"},
         {id:3, name:'Andray' , avatar:"https://help.tithe.ly/hc/article_attachments/18804144460951"},

     ],};
const friendsReducer = (state = initialState, action) => {

    return state;
}

export default friendsReducer;