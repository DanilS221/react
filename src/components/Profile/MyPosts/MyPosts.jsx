import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../helpers/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo((props) => {

    console.log("MyPosts рендер");


    let postsElements = props.post.map((p) => {
        return (<Post message={p.text} likeCount={p.like}/>)
    })


    let onAddPost = (dataPost) => {
        props.addPost(dataPost.textNewPost)
        console.log(dataPost.textNewPost);
    }


    return (
        <div className={s.postsAll}>
            <h2>my post</h2>
            <FormReduxAddPost onSubmit={onAddPost}/>


            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
});

const FormCreatePost = (props)=>{
    return(
        <form className='create_post' onSubmit={props.handleSubmit}>
            <div>
                <Field  component={Textarea} placeholder={'you new post'} name={"textNewPost"} validate={[requiredField, maxLengthCreator(10)]}/>
            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>

    )
}


const FormReduxAddPost = reduxForm({form:'post'})(FormCreatePost)

export default MyPosts;