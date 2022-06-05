import React from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md'

const PrevArrow = ({prevCard}) => {
    return ( 
        <span className='navIcon' onClick={prevCard}>
            <MdOutlineArrowBackIos />
            </span>
     );
}
 
export default PrevArrow;