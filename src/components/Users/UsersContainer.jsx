import { followAC, sendNumberAC, setCurrentPagesAC, setUsersAC, setUsersTotalCountAC, unfollowAC, updateNewNumberBodyAC } from '../../redux/usersReducer'
import {connect} from "react-redux"
import axios from 'axios'
import Users from './Users'
import React from 'react'

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return <Users 
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize} 
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            // onPageChanged = {() =>  {this.onPageChanged}}
            // onPageChanged = {this.onPageChanged.bind(bind)}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            usersPage = {this.state.usersPage}
            />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        usersPage: state.usersPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPagesAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        updateNewNumberBody: (body) =>{
            debugger;
            dispatch(updateNewNumberBodyAC(body))
        },
        sendNumber: () => {
            dispatch(sendNumberAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)