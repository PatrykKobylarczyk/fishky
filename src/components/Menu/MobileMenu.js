import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdOutlineSchool, MdAddCircleOutline, MdClose } from 'react-icons/md'

const MobileMenu = ({closeMenu}) => {
    return ( 
        <div className="mobile-menu">
            <Link to='/fishky/'><button className='menuBtn'><MdOutlineHome/></button></Link>
            <Link to='/fishky/learn'><button className='menuBtn'><MdOutlineSchool/></button></Link>
            <Link to='/fishky/create'><button className='menuBtn'><MdAddCircleOutline/></button></Link>
            <button className='menuBtn' onClick={closeMenu}><MdClose/></button>
        </div>
     );
}
 
export default MobileMenu;