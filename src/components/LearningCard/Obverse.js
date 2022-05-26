import React from 'react';

import Logo from '../Logo/Logo';

const Obverse = ({option}) => {
    return ( 
        <div className="card-face obverse">
            <Logo option={option}/>
            <h2>Obverse</h2>
        </div>
     );
}
 
export default Obverse;