import {
    follow, setCurrentPage, unfollow,
    toggleFollowingProgress, getUsers
} from '../../redux/usersReducer'
import { connect } from 'react-redux'
import Users from './Users'
import React from 'react'
import Preloader from '../comman/preloader/Preloader'
import { usersAPI } from '../../api/api'
import { Redirect } from 'react-router-dom'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
debugger
        this.props.getUsers(pageNumber, this.props.pageSize )

    }


    render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />
        
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                // onPageChanged = {() =>  {this.onPageChanged}}
                // onPageChanged = {this.onPageChanged.bind(bind)}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPagesAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }



export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage, 
        toggleFollowingProgress, getUsers
        // updateNewNumberBody, sendNumber
    })(UsersContainer)