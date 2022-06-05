import React from 'react';
import {Link} from 'react-router-dom'

import './Button.scss'

const Button = ({btnHandler, buttonText, buttonPath}) => {
    return (
        <Link to={buttonPath}>
            <button className="btn" onClick={btnHandler}>{buttonText}</button>
        </Link>
    );
}

export default Button