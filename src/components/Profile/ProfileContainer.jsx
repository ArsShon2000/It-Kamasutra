import React from 'react';
import Profile from './Profile';
import axios from 'axios'
import { setUserProfile } from '../../redux/profileReducer';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';



// const WithRouterComponent = (props) => {
//     const param = useParams()
//     return(
//         <ProfileContainer {...props} 
//         userId = {param.userId ? param.userId: 2}
//         />
//     )
// }

// export function withRouter(Children){
//     return(props)=>{

//        const match  = {params: useParams()};
//        return <Children {...props}  match = {match}/>
//    }
//  }

class ProfileContainer  extends React.Component {

    

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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


// const TakeParams = (props) => {
//     return <ProfileContainer {...props} param={useParams()} />
// }

// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp
// }


let WithRouterGet = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(WithRouterGet);