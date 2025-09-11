import React from 'react';
import s from'./Navbar.module.css';
import {NavLink} from "react-router-dom";
import friends from "./Friends/Friends";
import Friends from "./Friends/Friends";


const Navbar = (props) =>{

    let state = props.friends
    let friendsElement = state.friend.map(d=>{return (<Friends avatar={d.avatar} name={d.name} key={d.id}/>)})


    return(

        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" className={(props) => {if(props.isActive){
                return s.active}
                return "";}}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" className={({isActive})=>(isActive? s.active:"")}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/users" className={({isActive})=>(isActive? s.active:"")}>Users</NavLink></div>
            <div className={s.item}><NavLink to='/news' className={({isActive})=>(isActive? s.active:"")}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' className={({isActive})=>(isActive? s.active:"")}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings' className={({isActive})=>(isActive? s.active:"")}>Settings</NavLink></div>
            <div className={s.friends}>
                <div className={s.item}><NavLink to='/' className={({isActive})=>(isActive? s.active:"")}>Friends</NavLink></div>
                <div className={s.friendsBlock}>
                    {friendsElement}
                </div>
            </div>
        </nav>







    );
}

export default Navbar;