import React, { component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post massage='Hi, my name is Ars' col_like="5"/>
                <Post massage="It's my first post " col_like="6"/>
            </div>
        </div>)
}

export default MyPosts;