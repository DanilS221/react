import React from 'react';
import s from'./ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {type} from "@testing-library/user-event/dist/type";
import UserImage from "./../../../saveDate(hardCode)/images/UserImages.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) =>{






    if(!props.profile){
        return <Preloader/>
    }


    let socialArr = Object.values(props.profile.contacts)
    let social =  socialArr.map(social => {
        return (
            <div><a href={social}>{social}</a></div>
        )
    })
    return(

        <div>
            <div>
                <img className={s.fon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Elegant_Background-17.jpg/1200px-Elegant_Background-17.jpg?20170710104936'/>
            </div>

            <div className={s.information}>

                <div className={s.avatarFooter}>
                    <img className={s.avatar} src={props.profile.photos.small ? props.profile.photos.small: 'https://help.tithe.ly/hc/article_attachments/18804144460951'}  />
                </div>

                <div><h3 className={s.info}> {props.profile.fullName}</h3>
                    <ProfileStatus status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
                <span className={s}>{props.profile.aboutMe}</span>
                </div>

                <div className={s.socialBlock}>{social}</div>
            </div>

        </div>

    );
}

export default ProfileInfo;