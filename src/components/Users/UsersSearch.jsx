import {  } from '../../../redux/profileReducer';
import Users from './Users'
import {connect} from "react-redux"
import { sendNumber, updateNewNumberBody } from '../../redux/usersReducer';


let mapStateToProps = (state) => {
    return {
        newNumberBody: state.usersPage.newNumberBody,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             let action = updateNewPostTextActionCreator(text)
//             dispatch(action)
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         }
//     }
// }


const UsersSearch = connect(mapStateToProps, {updateNewNumberBody, sendNumber})(Users)


export default UsersSearch;