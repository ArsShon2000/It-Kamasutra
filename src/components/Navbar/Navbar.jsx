import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
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
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <div>
            <span><img src="https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg" /> </span>
            <span><img src="https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg" /> </span>
            <span><img src="https://vgtimes.ru/uploads/posts/2021-06/1623445957_tr8dqutdpwk.jpg" /> </span>
            </div>
        </nav>
    )
}

export default Navbar;