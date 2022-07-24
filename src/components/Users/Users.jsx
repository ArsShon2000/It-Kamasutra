import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'



let Users = (props) => {

    // let state = props.usersPage

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 6) < 0) ? 0 : curP - 6;
    let curPL = (parseInt(curP) + 5);
    let slicedPages = pages.slice(curPF, curPL);

    let newNumberElement = React.createRef()

    let onSendNumberClick = () => {
        props.onPageChanged(newNumberElement.current.value)
    }


    return (
        <div className={styles.users}>
            <div>
                {slicedPages.map(p => {
                    return <span className={parseInt(curP) === p && styles.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}> {p} </span>
                })}

                <textarea
                    ref={newNumberElement}
                    placeholder='Enter page number'
                >
                </textarea>

                <button onClick={onSendNumberClick}>
                    GO!
                </button>

            </div>

            {
                props.users.map(u => <div key={u.id} >
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id} >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "fd64e3f6-43f0-4fc4-8685-a982e0e3376a"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                        });

                                    props.unfollow(u.id)

                                }} >Unfollow</button>

                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "cbd11330-32b7-4eca-98ab-1840a362f711"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0){
                                                props.follow(u.id)
                                            }
                                        });

                                    props.follow(u.id)

                                }} >Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users