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
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
debugger
        this.props.getUsers(pageNumber, this.props.pageSize )

    }


    render() {
        
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

let AuthRedirectComponent = withAuthRedirect (UsersContainer)

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose (
    withAuthRedirect,
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage, 
            toggleFollowingProgress, getUsers
        })
) (UsersContainer)