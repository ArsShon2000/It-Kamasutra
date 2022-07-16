import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Sidebar from './sidebar/Sidebar';



const Navbar = () => {
    // <StoreContext.Consumer>
    //     {(store) => 
    //     {

            // let avatarElements = store.avatars.map(a => <Sidebar avatar={a.avatar} />)

            return (
                <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/dialogs" activeClassName={s.active}>Massages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                    </div>
                    {/* <div className={s.sidebar}>
                        <span><img src=""></img> </span>
                        {avatarElements}
                        <span> </span>
                    </div> */}
                </nav>
            )
        //   }
    // }
    // </StoreContext.Consumer>
}

export default Navbar;