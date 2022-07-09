import react from 'react'
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            { id: 1, followed: true, fullName: 'Malyshka', status: 'I am Ars is girlfriend', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://i.pinimg.com/236x/96/57/38/9657382007db8eb906fca1a9214f53df.jpg' },
            { id: 2, followed: true, fullName: 'Senpai', status: 'I am Ars is girlfriend', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg' },
            { id: 3, followed: true, fullName: 'Artur', status: 'I am Ars is girlfriend', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://pbs.twimg.com/media/EsBDBcnXcAEgDBX.jpg' },
            { id: 4, followed: false, fullName: 'Raushanka', status: 'I am Ars is girlfriend', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOusP5YliNsZbYwI4WkynTqKHUVyQFFWHQQ&usqp=CAU' },
            { id: 5, followed: false, fullName: 'Dinka', status: 'I am Ars is girlfriend', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://i.pinimg.com/564x/33/74/fd/3374fdc57e601e40d61d2001dd861454.jpg' },
            { id: 6, followed: true, fullName: 'Den', status: 'I am Ars is girlfriend', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://i.pinimg.com/550x/19/b5/ee/19b5eecf61ecfdf1b69516ad3a402aae.jpg' }
        ]   )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} >
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
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
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users