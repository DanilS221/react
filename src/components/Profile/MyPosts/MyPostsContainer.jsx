import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";




const MyPostsContainer = (props) =>{

    // let state = props.store.getState();

    return(
        <StoreContext.Consumer>
            {(store)=>{
            let state = store.getState();

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }

            let onPostChange = (text) => {
                let newVar = updateNewPostTextActionCreator(text);
                store.dispatch(newVar);
                console.log(text);

            }


            return (
                <MyPosts updateNewPostText={onPostChange} addPost={addPost} post={state.profilePage.postsItem} newPostText={state.profilePage.newPostText}></MyPosts>
            )}}
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;