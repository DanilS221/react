import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map(d=>{return (<DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)})

    let messagesElements = props.state.messages.map(m=>{return (<Message text={m.text} id={m.id}/>)})


    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;