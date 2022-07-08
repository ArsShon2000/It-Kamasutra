const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Malyshka', status: 'I am him girlfriend', location: { city: 'Moscow', country: 'Russia' }, avatar: 'https://i.pinimg.com/236x/96/57/38/9657382007db8eb906fca1a9214f53df.jpg' },
        { id: 2, followed: true, fullName: 'Senpai', status: 'I am him girlfriend', location: { city: 'Moscow', country: 'Russia' }, avatar: 'https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg' },
        { id: 3, followed: true, fullName: 'Artur', status: 'I am him girlfriend', location: { city: 'Moscow', country: 'Russia' }, avatar: 'https://pbs.twimg.com/media/EsBDBcnXcAEgDBX.jpg' },
        { id: 4, followed: false, fullName: 'Raushanka', status: 'I am him girlfriend', location: { city: 'Moscow', country: 'Russia' }, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOusP5YliNsZbYwI4WkynTqKHUVyQFFWHQQ&usqp=CAU' },
        { id: 5, followed: false, fullName: 'Dinka', status: 'I am him girlfriend', location: { city: 'Moscow', country: 'Russia' }, avatar: 'https://i.pinimg.com/564x/33/74/fd/3374fdc57e601e40d61d2001dd861454.jpg' },
        { id: 6, followed: true, fullName: 'Den', status: 'I am him girlfriend', location: { city: 'Moscow', country: 'Russia' }, avatar: 'https://i.pinimg.com/550x/19/b5/ee/19b5eecf61ecfdf1b69516ad3a402aae.jpg' },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === userID) {
                        return { ...u, followed: true }
                    }
                    return u
                }
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === userID) {
                        return { ...u, followed: false }
                    }
                    return u
                }
                )
            }

        case SET_USERS:
            return{
                ...state,
                users: [
                    ...state.users, 
                    ...action.users
                ]
            }    

        default:
            return state
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReducer;