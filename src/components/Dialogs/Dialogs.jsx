import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)}

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key = {d.id} avatar={d.avatar} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key = {m.id}  />);
    let newMessageBody = state.newMessageBody


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.dialog}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;