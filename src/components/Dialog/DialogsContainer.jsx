import React from "react";

import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;


    let onSendMessageClick = () =>{
        props.store.dispatch(addNewMessageActionCreator())
    }

    let onNewMessageChange = (newText) =>{
        props.store.dispatch(updateNewMessageTextActionCreator(newText))

    }



    return(
        <Dialogs updateNewMessageText={onNewMessageChange} addNewMessage={onSendMessageClick} messagesPage={state}/>
    );
}

export default DialogsContainer;