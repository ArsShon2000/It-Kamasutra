import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        {/* <img src='https://sun9-47.userapi.com/impg/3uS6CDwUbpMKhngaasrMOWpoAbZ6PaPS4BMuVg/vyTAYiFI6LQ.jpg?size=1391x1440&quality=96&sign=849d1c5d4beb9b4870b2d2acc78cef03&type=album' /> */}
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            :<NavLink to={'/login'}>login</NavLink>}
        </div>
    </header>
}

export default Header;