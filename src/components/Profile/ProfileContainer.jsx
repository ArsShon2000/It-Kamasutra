import React from 'react';
import Profile from './Profile';
import axios from 'axios'
import { setUserProfile } from '../../redux/profileReducer';
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom';


const WithRouterComponent = (props) => {
    const param = useParams()
    debugger
    return(
        <ProfileContainer {...props} 
        userId = {param.userId ? param.userId: 2}
        />
    )
}

class ProfileContainer  extends React.Component {

    

    componentDidMount() {
        // let userId = this.props.match.params.userId
        // if(!userId) {
        //     userId = 2
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
        .then(response => {
            debugger
            this.props.setUserProfile(response.data)
        });
    }

    
    

    render(){
    return <div>
        <Profile {...this.props} profile={this.props.profile} />
    </div>
    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

// export function withRouter(Children){
//     return(props) => {
//         debugger
//         const match = {params: useParams()}
//         return <Children {...props} match = {match} />
//     }
// }


// let WithUrlDataContainerComponent = withRouter(ProfileContainer)





export default connect(mapStateToProps, {setUserProfile})(WithRouterComponent);