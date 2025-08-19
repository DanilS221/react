import React from "react";

import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";



const DialogsContainer = () => {

    return(
        <StoreContext.Consumer>
            {(store) =>{
            let state = store.getState().messagesPage;


            let onSendMessageClick = () =>{
                store.dispatch(addNewMessageActionCreator())
            }

            let onNewMessageChange = (newText) =>{
                store.dispatch(updateNewMessageTextActionCreator(newText))

            }


            return (
                <Dialogs updateNewMessageText={onNewMessageChange} addNewMessage={onSendMessageClick} messagesPage={state}/>
            )

        }}
        </StoreContext.Consumer>

    );
}

export default DialogsContainer;