import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import React from 'react';


debugger;
let Users = (props) => {

    let state = props.usersPage

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    let onNewNumberChange = (e) => {
        let body = e.target.value
        props.updateNewNumberBody(body)
    }

    let onSendNumberClick = () => {
        props.sendNumber()        
    }
    debugger;
    let newNumberBody = state.newNumberBody

    return (
        <div>
            <div>
                {slicedPages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}> {p} </span>
                })}

                <textarea className='pagesNumber'
                    value={newNumberBody}
                    onChange={ onNewNumberChange }
                    placeholder='Enter your page number' 
                    >
                </textarea>

                <button onClick={ onSendNumberClick }>
                    GO!
                </button>

            </div>

            {
                props.users.map(u => <div key={u.id} >
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }} >Follow</button>}

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