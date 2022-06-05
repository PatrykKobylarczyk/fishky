import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdOutlineSchool, MdAddCircleOutline, MdClose } from 'react-icons/md'
import './Menu.scss'

const DesktopMenu = () => {
    return (
        <div className="desktop-menu">
            <div className="desktopMenuBtns">
                <Link to='/fishky/'><button className='menuBtn'><MdOutlineHome /></button></Link>
                <Link to='/fishky/learn'><button className='menuBtn'><MdOutlineSchool /></button></Link>
                <Link to='/fishky/create'><button className='menuBtn'><MdAddCircleOutline /></button></Link>
            </div>
        </div>
    );
}

export default DesktopMenu;