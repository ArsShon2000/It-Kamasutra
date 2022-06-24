import React, { component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {

    // let posts =[
    //     {id: 1, message: 'Hi, my name is Ars', likesCount: 7},
    //     {id: 2, message: "It's my first post", likesCount: 6},                  Подняли на уровень выше чтобы  отправить их в БД
    //     {id: 1, message: 'I learn React 3-th day', likesCount: 47},
    //     {id: 1, message: 'Я будущий миллионер', likesCount: 87237},
    // ]

    return <div>
        <ProfileInfo />
        
        <MyPosts posts = {props.state.posts}/>
    </div>
}


export default Profile;