import React from 'react';
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) =>{




    return(

        <div className={s.content}>

            <ProfileInfo/>

            <MyPosts postsData={props.profilePage.postsItem}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>

            <div></div>
        </div>
    );
}

export default Profile;