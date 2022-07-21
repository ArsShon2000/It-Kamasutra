const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SEND_NUMBER = 'SEND_NUMBER'
const UPDATE_NEW_NUMBER_BODY = 'UPDATE_NEW_NUMBER_BODY'
const TOGGLE_IF_FETCHING = 'TOGGLE_IF_FETCHING'






let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    newNumberBody: 5,
    isFetching: false
    
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
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
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                }
                )
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IF_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

            
        case SEND_NUMBER:
            return{
                ...state,                
                currentPage: action.num,
                newNumberBody: '',
                currentPage: ''
            }
        case UPDATE_NEW_NUMBER_BODY:
            return{
                ...state,
                newNumberBody: action.number
            }
        default:
            return state
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IF_FETCHING, isFetching })
export const sendNumber = (num) => ({ type: SEND_NUMBER, num})
export const updateNewNumberBody = (number) => 
({ type: UPDATE_NEW_NUMBER_BODY, number: number})




export default usersReducer;