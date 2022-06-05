import React from 'react';
import { CgMenuLeft } from 'react-icons/cg'

const UpArrow = ({openMenuHandler}) => {
    return ( 
        <span className='navIcon' onClick={openMenuHandler}>
            <CgMenuLeft />
        </span>
     );
}
 
export default UpArrow;