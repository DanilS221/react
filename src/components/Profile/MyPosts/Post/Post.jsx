import React from 'react';
import s from'./Post.module.css';

const Post = (props) =>{

    return(
    
        <div className={s.item}>

            <div className={s.inPost}>

                <img src='https://zoolapamoya.ru/wp-content/uploads/2020/02/avatarm.png'></img>
                <span>{props.message}</span>
                <div>
                    <span>Like {props.likeCount}</span>
                </div>

            </div>

        </div>
    );
}

export default Post;