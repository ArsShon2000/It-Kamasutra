import React, { component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData =[
        {id: 1, message: 'Hi, my name is Ars', likesCount: 7},
        {id: 2, message: "It's my first post", likesCount: 6}, 
    ]

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post massage={postData[0].message} likesCount={postData[0].likesCount} />
                <Post massage={postData[1].message} likesCount={postData[1].likesCount} />
            </div>
        </div>)
}

export default MyPosts;