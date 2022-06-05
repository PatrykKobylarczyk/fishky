import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const NextArrow = ({ nextCard }) => {
    return (
        <span className='navIcon' onClick={nextCard}>
            <MdOutlineArrowForwardIos />
        </span>
    );
}

export default NextArrow;