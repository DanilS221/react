import React from 'react';
import s from'./Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) =>{

    return(
        <div className={s.friends}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.item}> <a>{props.name}</a> </div>
        </div>


    );
}

export default Friends;