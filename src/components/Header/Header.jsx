import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{




    return(
        <header className={s.header}>
            <img src='https://static.vecteezy.com/system/resources/previews/036/431/225/non_2x/ai-generated-high-quality-logo-style-silhouette-of-a-cherry-blossom-twigs-free-png.png'></img>
            {/* <h1>PopiCon</h1> */}
            <div className={s.loginBlock}>
                {props.isAuth ? <><img src= {props.photo? props.photo : 'https://help.tithe.ly/hc/article_attachments/18804144460951'}/><a>{props.login}</a></>
                    :<div><NavLink to='/login'>Login</NavLink></div>}
            </div>
        </header>
    );
}

export default Header;