import React from 'react';

import './Menu.scss'

//ICONS
import { IconContext } from 'react-icons';
import {MdAddCircleOutline} from 'react-icons/md'
import {MdOutlineSchool} from 'react-icons/md'
import {RiNeteaseCloudMusicLine} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'


const Menu = ({closeMenu}) => {

    const menuButtons = [
        {
            name: 'learn',
            icon: <MdOutlineSchool/>,
            path: '/fishky/learn',
            click: ''
        },
        {
            name: 'create',
            icon: <MdAddCircleOutline/>,
            path: '/fishky/create',
            click: ''
        },
        {
            name: 'music',
            icon: <RiNeteaseCloudMusicLine/>,
            path: '',
            click: ''
        },
        {
            name: 'close',
            icon: <MdClose/>,
            path: '',
            click: closeMenu
        },
    ]

    const buttons = menuButtons.map( btn => <button key={btn.name} className='menuBtn' onClick={btn.click}>{btn.icon}</button> )

    return ( 
        <IconContext.Provider value={{color: 'white', size: 25 }}>
            <div className='menu'>{buttons}</div>
        </IconContext.Provider>
     );
}
 
export default Menu;