import React from 'react';
import { useLocation } from 'react-router-dom';

import './Logo.scss'

const Logo = () => {

    const category = sessionStorage.getItem('selectedCategory');

    const location = useLocation();
    let curLoc = location.pathname

    let sufix = '';
    let sufixColor = '';

    if (curLoc === '/fishky/learn/learning-card') {
        if (category === 'english') {
            sufix = 'en';
            sufixColor = 'rgb(3, 58, 240)';
        }
        if (category === 'react') {
            sufix = 're';
            sufixColor = 'rgb(0, 236, 225)';
        }
    } else {
        sufix = 'ky';
        sufixColor = '';
    }

    return (
        <div className="logo">
            <h3>fish<span style={{ color: `${sufixColor}` }}>{sufix}</span></h3>
        </div>

    );
}

export default Logo;