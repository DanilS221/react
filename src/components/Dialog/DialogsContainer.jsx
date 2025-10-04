import React from "react";

import {addNewMessageActionCreator,} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



// const DialogsContainer = () => {
//
//     return(
//         <StoreContext.Consumer>
//             {(store) =>{
//             let state = store.getState().messagesPage;
//
//
//             let onSendMessageClick = () =>{
//                 store.dispatch(addNewMessageActionCreator())
//             }
//
//             let onNewMessageChange = (newText) =>{
//                 store.dispatch(updateNewMessageTextActionCreator(newText))
//
//             }
//
//
//             return (
//                 <Dialogs updateNewMessageText={onNewMessageChange} addNewMessage={onSendMessageClick} messagesPage={state}/>
//             )
//
//         }}
//         </StoreContext.Consumer>
//
//     );
// }










let mapStateToProps =(state)=>{
    return {
        messagesPage: state.messagesPage,


    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        // updateNewMessageText:(newText)=>{dispatch(updateNewMessageTextActionCreator(newText))},
        addNewMessage:(dataForm)=>{ dispatch(addNewMessageActionCreator(dataForm))}

    }
}





// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// //Перенаправление , если пользователь не авторизирован
//
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent)

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);