import React from 'react';

import './Logo.scss'

const Logo = ({ option }) => {

    let sufix = '';
    let sufixColor = '';
    if (option.includes('english')) {
        sufix = 'en';
        sufixColor = 'rgb(3, 58, 240)';
    } else if (option.includes('react')) {
        sufix = 're';
        sufixColor = 'rgb(0, 236, 225)';
    } else {
        sufix = 'ky';
        sufixColor = '';
    }

    return (
        <div className="logo">
            <h3>fish<span style={{color: `${sufixColor}`}}>{sufix}</span></h3>
        </div>

    );
}

export default Logo;