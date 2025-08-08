import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src={props.avatar} className={ s.avatar }/>

            <NavLink to={"/dialogs/" + props.id} className={(props) => {if(props.isActive){
                return s.active;} else return '' }}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;