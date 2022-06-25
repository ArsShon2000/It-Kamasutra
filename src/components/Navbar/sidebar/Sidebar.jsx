import React, { component } from 'react';
// import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';



const Sidebar = (props) => {

  

    return (
        <div className={s.side}>
            <span><img src={props.avatar}/></span>
            
        </div>
    )
}

export default Sidebar;