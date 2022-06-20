import React, { component } from 'react';
import s from './Navbar.module.css';

// let s ={
//     'nav': 'Navbar_nav__3ou9Q'
//     'item': 'Navbar_item__3er6Q'
// }

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Massages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
        {/* <div>
      Profile
    </div> */}
    </nav>
}

export default Navbar;