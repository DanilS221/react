import React from 'react';
import s from'./Profile.module.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";

import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>{
    console.log("Profile")





    return(

        <div className={s.content}>

            <ProfileInfo profile={props.profile} status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>

            <MyPostsContainer />

            <div></div>
        </div>
    );
}

export default Profile;