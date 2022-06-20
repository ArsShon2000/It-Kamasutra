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
                <Post massage='Hi, my name is Ars'/>
                <Post massage="It's my first post "/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>)
}

export default MyPosts;