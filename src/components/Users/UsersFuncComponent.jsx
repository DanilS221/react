import React from "react";
import s from "./Users.module.css"
import axios from "axios";
import UserImages from "../../saveDate(hardCode)/images/UserImages.png";



let UsersFuncComponent = (props) => {

    let getUsers = () =>{
        if(props.users.length===0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response) => {
                    props.setUser(response.data.items);})
            return <div>Загрузка...</div>
        }
    }


    return (
    <div >
        <button onClick={getUsers} className="btn btn-primary">{props.users.length===0? 'Загрузить пользователей': 'Пользователи загруженны'}</button>
            {
                props.users.map(user =>(
                    <div key={user.id} className={s.itemUser}>
                        <div className={s.avatarName}>
                            <div className={s.photoButton}>
                                <img className={s.photo} src={user.photos.small != null ? user.photos.small : UserImages} alt=""/>
                                {user.follower ? <button className={s.follower} onClick={()=>{props.unFollow(user.id)}}>UnFollow</button>
                                    : <button onClick={()=>{props.follow(user.id)}}>Follow</button>}
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

export default  Users;