import React from 'react';
import s from'./ProfileInfo.module.css';


const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img className={s.fon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Elegant_Background-17.jpg/1200px-Elegant_Background-17.jpg?20170710104936'/>
            </div>

            <div className={s.information}>

                <div className={s.avatarFooter}>
                    <img className={s.avatar} src='https://avatars.mds.yandex.net/i?id=ace955535034551e33054bff093eaf78fd5b743a-13203964-images-thumbs&n=13'/>
                </div>

                <h3 className={s.info}> ava + description</h3>
            </div>

        </div>

    );
}

export default ProfileInfo;