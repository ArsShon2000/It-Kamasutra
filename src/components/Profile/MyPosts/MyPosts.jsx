import React, { component } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch(addPostActionCreator())
    }

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}

export default MyPosts;