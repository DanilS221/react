import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";




// const MyPostsContainer = (props) =>{
//
//     // let state = props.store.getState();
//
//     return(
//         <StoreContext.Consumer>
//             {(store)=>{
//             let state = store.getState();
//
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
//
//             let onPostChange = (text) => {
//                 let newVar = updateNewPostTextActionCreator(text);
//                 store.dispatch(newVar);
//                 console.log(text);
//
//             }
//
//
//             return (
//                 <MyPosts updateNewPostText={onPostChange} addPost={addPost} post={state.profilePage.postsItem} newPostText={state.profilePage.newPostText}></MyPosts>
//             )}}
//         </StoreContext.Consumer>
//     );
// }




let mapStateToProps=(state)=>{
    return{
        post:state.profilePage.postsItem,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostText:(text)=>{
            if(text.length<8){
                let newVar = updateNewPostTextActionCreator(text);
                dispatch(newVar);
            }


        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;