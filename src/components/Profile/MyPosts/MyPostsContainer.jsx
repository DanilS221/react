import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) =>{

    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let newVar = updateNewPostTextActionCreator(text);
        props.store.dispatch(newVar);
        console.log(text);

    }




    return(
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} post={state.profilePage.postsItem} newPostText={state.profilePage.newPostText}></MyPosts>
    );
}

export default MyPostsContainer;