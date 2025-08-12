import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) =>{


    let postsElements = props.postsData.map((p)=>{return(<Post message={p.text} likeCount={p.like}/>)})

    let newPostsElements = React.createRef()



    let addPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostsElements.current.value;
        props.updateNewPostText(text)
        console.log(text);

    }




    return(
    <div className={s.postsAll}>
        <h2>my post</h2>
        <div className='create_post'>
            <div>
                <textarea onChange={onPostChange} ref={newPostsElements} value={props.newPostText}/>
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
                
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

    );
}

export default MyPosts;