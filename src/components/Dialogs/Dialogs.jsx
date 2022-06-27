import React, { component } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

// const DialogItem = (props) => {
//     let path = "/dialogs/" + props.id;
//     return <div className={s.dialog + ' ' + s.active}>
//         <NavLink to={path}>{props.name}</NavLink>
//     </div>
// }

// const Message = (props) => {
//     return <div className={s.dialog}>
//         {props.message}
//     </div>
// }



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let mewMessageElement = React.createRef();

    let addMessage = () => {   //onSendMessageClick
        // let textMessage = mewMessageElement.current.value;
        // alert(textMessage)
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    // let dialogs = [
    //     { id: 1, name: 'Malyshka' },
    //     { id: 2, name: 'Senpai' },
    //     { id: 3, name: 'Artur' },                    Подняли на уровень выше чтобы  отправить их в БД
    //     { id: 4, name: 'Amina' },
    //     { id: 5, name: 'Sabira' },
    //     { id: 6, name: 'Den' },
    // ]

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);


    // let messages = [
    //     { id: 1, message: 'Кисконайым' },
    //     { id: 2, message: 'Еркеее' },
    //     { id: 3, message: 'Сянм сянм сянм' },                    Подняли на уровень выше чтобы  отправить их в БД
    //     { id: 4, message: 'Сянм сянм сянм' },
    //     { id: 5, message: 'Сянм сянм сянм' },
    //     { id: 6, message: 'Сянм сянм сянм' },
    // ]

    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}

                {/* <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
                <DialogItem name={dialogs[2].name} id={dialogs[2].id} />
                <DialogItem name={dialogs[3].name} id={dialogs[3].id} />
                <DialogItem name={dialogs[4].name} id={dialogs[4].id} />
                <DialogItem name={dialogs[5].name} id={dialogs[5].id} /> */}

            </div>
            <div className={s.dialog}>
                <div>
                    {messagesElements}
                </div>

                {/* <Massage massage={messages[0].message} id={messages[0].id} />
                <Massage massage={messages[1].message} id={messages[1].id} />
                <Massage massage={messages[2].message} id={messages[2].id} /> */}

                <div>
                    <div>
                        {/* <textarea ref = {mewMessageElement}></textarea> */}
                        <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea>

                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;