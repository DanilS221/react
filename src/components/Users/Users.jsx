import React from "react";
import s from "./Users.module.css";
import UserImages from "../../saveDate(hardCode)/images/UserImages.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../API/API";
import {setFollowingInProgress} from "../../redux/users-reducer";




let Users = (props)=>{


    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);

    let pages = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i)}

    return (
    <div >
        <div>
            {
                pages.map((item)=>{
                    
                    return <span key={item} onClick={()=>{props.onPageChange(item)}} className={props.currentPage === item ? s.selectedPage: s.number}>{item}</span>})
            }
        </div>
        <button className={s.buttonSwitch} onClick={()=>props.backPage()}>Назад</button>
        <button className={s.buttonSwitch} onClick={()=>props.nextPage()}>Вперед</button>

        {
            props.users.map(user =>(
                <div key={user.id} className={s.itemUser}>
                    <div className={s.avatarName}>
                        <div className={s.photoButton}>
                            <NavLink to={'/profile/'+user.id} >
                            <img className={s.photo} src={user.photos.small != null ? user.photos.small : UserImages} alt=""/>
                            </NavLink>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id=> id === user.id)} className={s.follower} onClick={()=>{
                                    props.unFollow(user.id)
                                }}>UnFollow</button>


                                : <button disabled={props.followingInProgress.some(id=> id === user.id)} onClick={()=>{
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>

                        <div className={s.nameStatus}>
                            <div className={s.nameUser}>{user.name}</div>
                            <div>{user.status}</div>
                        </div>

                    </div>

                    <div className={s.location}>
                        <div>
                            <div>Not Country on server</div>
                            <div>Not sity on server</div>
                        </div>

                    </div>
                </div>))
        }
    </div>
    )
}

export default Users;