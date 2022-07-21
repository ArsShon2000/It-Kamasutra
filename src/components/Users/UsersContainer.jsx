import { follow, sendNumber, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow, updateNewNumberBody } from '../../redux/usersReducer'
import {connect} from 'react-redux'
import axios from 'axios'
import Users from './Users'
import React from 'react'
import Preloader from '../comman/preloader/Preloader'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader />  : null}
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
            // newNumberBody = {this.props.newNumberBody}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        // newNumberBody: state.usersPage.newNumberBody
        isFetching: state.usersPage.isFetching
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


//         // updateNewNumberBody: (number) =>{
//         //     // dispatch(updateNewNumberBodyAC(number))
//         //     let action = updateNewNumberBodyAC(number)
//         //     dispatch(action)
//         // },
//         // sendNumber: () => {
//         //     dispatch(sendNumberAC())
//         // }
//     }
// }

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers,
    setCurrentPage, setUsersTotalCount, toggleIsFetching
    }) (UsersContainer)