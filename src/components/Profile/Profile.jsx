import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () =>{
    return(
        <div className={s.content}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Elegant_Background-17.jpg/1200px-Elegant_Background-17.jpg?20170710104936'/>
            </div>

            <div>ava + description</div>

            <MyPosts/>

            <div></div>
        </div>
    );
}

export default Profile;