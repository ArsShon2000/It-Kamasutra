import React, { component } from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Malyshka
                </div>
                <div className={s.dialog}>
                    Senpai
                </div>
                <div className={s.dialog}>
                    Artur
                </div>
                <div className={s.dialog}>
                    Amina
                </div>
                <div className={s.dialog}>
                    Sabira
                </div>
                <div className={s.dialog}>
                    Den
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