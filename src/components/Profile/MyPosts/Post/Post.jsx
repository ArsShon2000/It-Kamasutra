import React, { component } from 'react';
import s from './Post.module.css';

const Post = (props) => {

    
    return (
        <div className={s.item}>
            <img src='https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg' />
            {props.massage}
            <div>
                <span>like </span>    
            </div>

        </div>
    )
}

export default Post;