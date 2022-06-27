import React, { component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch( {type : 'ADD-POST' } )
    }

    // let posts =[
    //     {id: 1, message: 'Hi, my name is Ars', likesCount: 7},
    //     {id: 2, message: "It's my first post", likesCount: 6},                  Подняли на уровень выше чтобы  отправить их в БД
    //     {id: 1, message: 'I learn React 3-th day', likesCount: 47},
    //     {id: 1, message: 'Я будущий миллионер', likesCount: 87237},
    // ]

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = {type : 'UPDATE-NEW-POST-TEXT', newText: text }
        props.dispatch (action)
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
                {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} /> */}
            </div>
        </div>)
}

export default MyPosts;