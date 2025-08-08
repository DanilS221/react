import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{


    let postsElements = props.postsData.map((p)=>{return(<Post message={p.text} likeCount={p.like}/>)})



    return(
    <div className={s.postsAll}>
        <h2>my post</h2>
        <div className='create_post'>
            <div>
                <textarea></textarea>
            </div>

            <div>
                <button>Add post</button>
            </div>
        </div>
                
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

    );
}

export default MyPosts;