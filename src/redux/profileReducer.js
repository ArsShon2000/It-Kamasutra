const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, my name is Ars', likesCount: 7 },
        { id: 2, message: "It's my first post", likesCount: 6 },
        { id: 3, message: 'I learn React 3-th day', likesCount: 47 },
        { id: 4, message: 'Я будущий миллионер', likesCount: 87237 },
      ],

      newPostText: "More money",
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
              };
        
              state.posts.push(newPost);
              state.newPostText = ''
              return state
              
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }       
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;