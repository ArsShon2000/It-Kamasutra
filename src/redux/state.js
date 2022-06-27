import React from "react";

const ADD_POST = 'ADD-POST'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, my name is Ars', likesCount: 7 },
        { id: 2, message: "It's my first post", likesCount: 6 },
        { id: 3, message: 'I learn React 3-th day', likesCount: 47 },
        { id: 4, message: 'Я будущий миллионер', likesCount: 87237 },
      ],

      newPostText: "More money",

    },



    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Malyshka', avatar: 'https://i.pinimg.com/236x/96/57/38/9657382007db8eb906fca1a9214f53df.jpg' },
        { id: 2, name: 'Senpai', avatar: 'https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg' },
        { id: 3, name: 'Artur', avatar: 'https://pbs.twimg.com/media/EsBDBcnXcAEgDBX.jpg' },
        { id: 4, name: 'Amina', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOusP5YliNsZbYwI4WkynTqKHUVyQFFWHQQ&usqp=CAU' },
        { id: 5, name: 'Sabira', avatar: 'https://i.pinimg.com/564x/33/74/fd/3374fdc57e601e40d61d2001dd861454.jpg' },
        { id: 6, name: 'Den', avatar: 'https://yt3.ggpht.com/ByOVkU5hN6Eal5Cs009IihRYm8YyIq5MAT_nc93WU43LXY4RKqO3pVT41OkWF0FwgH-l2iduEg=s900-c-k-c0x00ffffff-no-rj' },
      ],

      messages: [
        { id: 1, message: 'Кисконайым' },
        { id: 2, message: 'Еркеее' },
        { id: 3, message: 'Сянм сянм сянм' },
        { id: 4, message: 'Сянм сянм сянм' },
        { id: 5, message: 'Сянм сянм сянм' },
        { id: 6, message: 'Сянм сянм сянм' },
      ],

      newMessageBody: [
      ]
    },

    sidebar: {
      avatars: [
        { avatar: 'https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg' },  // NAVBAR Avatars
        { avatar: 'https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg' },
        { avatar: 'https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg' },
      ]

    },
  },
  _callSubscriber() {
    console.log('State is changed')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state
  },

  // _addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  //   this._state.profilePage.posts.push(newPost)
  //   this._state.profilePage.newPostText = ''
  //   this._callSubscriber(this._state)
  // },
  // _updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText
  //   this._callSubscriber(this._state)
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ' '
      this._state.dialogsPage.messages.push({ id: 7, message: body })

      this._callSubscriber(this._state)
    }
  },
}

export const addPostActionCreator = () => ({ type : ADD_POST })
export const updateNewPostTextActionCreator = (text) => 
  ( { type : UPDATE_NEW_POST_TEXT, newText: text } )

export const sendMessageCreator = () => ({ type : SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => 
  ( { type : UPDATE_NEW_MESSAGE_BODY, body: text } )

export default store;
window.state = store