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

    let dialogsData =[
        {id: 1, name: 'Malyshka'},
        {id: 2, name: 'Senpai'},
        {id: 3, name: 'Artur'},
        {id: 4, name: 'Amina'},
        {id: 5, name: 'Sabira'},
        {id: 6, name: 'Den'},
    ]


    let messagesData =[
        {id: 1, message: 'Кисконайым'},
        {id: 2, message: 'Еркеее'},
        {id: 3, message: 'Сянм сянм сянм'},
    ]
    


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.dialog}>
                <Massage massage={messagesData[0].message} id={messagesData[0].id} />
                <Massage massage={messagesData[1].message} id={messagesData[1].id} />
                <Massage massage={messagesData[2].message} id={messagesData[2].id} />
            </div>
        </div>
    )
}

export default Dialogs;