import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../helpers/validators/validators";



const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogs.map(d=>{return (<DialogItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>)})

    let messagesElements = state.messages.map(m=>{return (<Message text={m.text} id={m.id} key={m.id} />)})



    // let newMessageText = state.newMessageText;


    // let onSendMessageClick = () =>{
    // }

    // let onNewMessageChange = (event) =>{
    //     let newText = event.target.value;
    //     props.updateNewMessageText(newText)
    // }



    let addNewMassages = (dataForm) =>{
        props.addNewMessage(dataForm.newMessages)
        console.log(dataForm.newMessages)

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
                <AddMessageReduxForm onSubmit={addNewMassages}/>


            </div>
        </div>
    );
}


const AddMessageForm = (props) =>{
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[requiredField, maxLengthCreator(10)]} name='newMessages' placeholder={'Your message'}></Field>
        </div>
        <div>
            <button >send</button>
        </div>
    </form>
    )
}


const AddMessageReduxForm = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;