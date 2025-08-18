import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";



const Dialogs = (props) => {

    let state = props.messagesPage;


    let dialogsElements = state.dialogs.map(d=>{return (<DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)})

    let messagesElements = state.messages.map(m=>{return (<Message text={m.text} id={m.id}/>)})

    let newMessageText = state.newMessageText;







    let onSendMessageClick = () =>{

        props.addNewMessage()
    }

    let onNewMessageChange = (event) =>{
        let newText = event.target.value;
        props.updateNewMessageText(newText)


    }



    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div><textarea
                               placeholder={'Your message'}
                               value={newMessageText}
                               onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;