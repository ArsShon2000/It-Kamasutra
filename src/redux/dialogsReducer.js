const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
  }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ' '
            state.messages.push({ id: 7, message: body })
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })

export default dialogsReducer;