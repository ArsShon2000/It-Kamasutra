import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Sidebar from './sidebar/Sidebar';



const Navbar = (props) => {

    let avatarElements = props.state.avatars.map(a => <Sidebar avatar={a.avatar} />)


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}> {/*<div className={`${s.item} ${s.active}`}> */}
                <NavLink to="/dialogs" activeClassName={s.active}>Massages</NavLink>
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
            <div className={s.sidebar}>
                <span><img src=""></img> </span>
                {avatarElements}       
                <span> </span>         
            </div>
        </nav>
    )
}

export default Navbar;