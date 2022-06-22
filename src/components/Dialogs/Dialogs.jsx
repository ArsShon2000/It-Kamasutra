import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Malyshka</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/2">Senpai</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3">Artur</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4">Amina</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5">Sabira</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/6">Den</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.massage}>
                    Кисконайым
                </div>
                <div className={s.massage}>
                    Еркеее
                </div>
                <div className={s.massage}>
                    Сянм сянм сянм
                </div>
            </div>
        </div>
    )
}

export default Dialogs;