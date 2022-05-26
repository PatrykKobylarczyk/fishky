import React from 'react';

import Logo from '../Logo/Logo';

const Reverse = ({option}) => {
    return ( 
        <div className="card-face reverse">
            <Logo option={option}/>
            <h2>Reverse</h2>
        </div>
     );
};
 
export default Reverse;