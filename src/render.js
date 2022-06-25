import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

// addPost('Yoo!');  Проверка

// let posts =[
//   {id: 1, message: 'Hi, my name is Ars', likesCount: 7},
//   {id: 2, message: "It's my first post", likesCount: 6},
//   {id: 1, message: 'I learn React 3-th day', likesCount: 47},
//   {id: 1, message: 'Я будущий миллионер', likesCount: 87237},
// ]
// //______________________________________________________________________
// let dialogs = [
//   { id: 1, name: 'Malyshka' },
//   { id: 2, name: 'Senpai' },
//   { id: 3, name: 'Artur' },
//   { id: 4, name: 'Amina' },
//   { id: 5, name: 'Sabira' },
//   { id: 6, name: 'Den' },
// ]

// let messages = [
//   { id: 1, message: 'Кисконайым' },
//   { id: 2, message: 'Еркеее' },
//   { id: 3, message: 'Сянм сянм сянм' },
//   { id: 4, message: 'Сянм сянм сянм' },
//   { id: 5, message: 'Сянм сянм сянм' },
//   { id: 6, message: 'Сянм сянм сянм' },
// ]


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} addPost = { addPost } updateNewPostText = {updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



