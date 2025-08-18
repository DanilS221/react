import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const MyPosts = (props) =>{


    let postsElements = props.post.map((p)=>{return(<Post message={p.text} likeCount={p.like}/>)})

    let newPostsElements = React.createRef()



    let onAddPost = () => {
        props.addPost()

        // props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostsElements.current.value;
        props.updateNewPostText(text)
        // let newVar = updateNewPostTextActionCreator(text);
        // props.dispatch(newVar);
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
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
                
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

    );
}

export default MyPosts;