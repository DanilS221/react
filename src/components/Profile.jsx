import React from 'react';
import s from'./Profile.module.css';

const Profile = () =>{
    return(
        <div className={s.content}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Elegant_Background-17.jpg/1200px-Elegant_Background-17.jpg?20170710104936'/>
            </div>

            <div>ava + description</div>

            <div className='posts'>
                my post


                <div className='create_post'>
                    Create new post
                </div>
                
                <div className={s.item}>
                    1 post
                </div>

                <div className={s.item}>
                    2 post
                </div>

            </div>

            <div></div>
        </div>
    );
}

export default Profile;