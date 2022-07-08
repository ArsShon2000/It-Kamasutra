import react from 'react'
import { followAC, setUsers, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

mapDispatchToProps = (dispatch) => {
    return{
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC)(users)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)