import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
    return(
    <div className='posts'>
    my post
        <div className='create_post'>
            <textarea></textarea>
            <button>Add post</button>
        </div>
                
        <div className={s.posts}>
            <Post message='Привет , это  тоестовый пост' likeCount='55'/>
            <Post message='Меня зовут Данил' likeCount='12'/>

        </div>
    </div>

    );
}

export default MyPosts;