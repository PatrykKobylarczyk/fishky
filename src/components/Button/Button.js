import React from 'react';

import './Button.scss'

const Button = (props) => {
    return ( 
        <div className="btn">
            <button>{props.name}</button>
        </div>
     );
}
 
export default Button