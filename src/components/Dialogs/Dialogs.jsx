import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Massage = (props) => {
    return <div className={s.dialog}>
        {props.massage}
    </div>
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Malyshka" id="1" />
                <DialogItem name="Senpai" id="2" />
                <DialogItem name="Artur" id="3" />
                <DialogItem name="Amina" id="4" />
                <DialogItem name="Sabira" id="5" />
                <DialogItem name="Den" id="6" />
            </div>
            <div className={s.dialog}>
                <Massage massage="Кисконайым" />
                <Massage massage="Еркеее" />
                <Massage massage="Сянм сянм сянм" />
            </div>
        </div>
    )
}

export default Dialogs;