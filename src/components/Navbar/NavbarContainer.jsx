import React from 'react';
import s from'./Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import StoreContext from "../../StoreContext";
import store from "../../redux/store";
import Navbar from "./Navbar";

const NavbarContainer = () =>{



    return(

        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState().friends;
                let friendsElement = state.friend.map(d=>{return (<Friends avatar={d.avatar} name={d.name}/>)})

                return (
                    <Navbar friendsElement={friendsElement}></Navbar>
                )

            }}

        </StoreContext.Consumer>


    );
}

export default NavbarContainer;