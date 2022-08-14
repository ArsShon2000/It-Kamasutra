import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAuthUserData } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
        
    }

    render() {
        return <Header {...this.props} />
    }
} 



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default compose(
    connect (mapStateToProps, {getAuthUserData})
)(HeaderContainer)

// export default connect (mapStateToProps, {getAuthUserData}) (HeaderContainer)