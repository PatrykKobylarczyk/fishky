import React from 'react';
import { react } from '../Data/react'
import Logo from '../Logo/Logo';


const ReactCard = ({ cardNumber }) => {
    return (
        <>
            <div className="card-face obverse">
                <Logo />
                <h2>{react.map(card => card.word)[cardNumber]}</h2>
            </div>
            <div className="card-face reverse">
                <Logo />
                <p>{react.map(card => card.description)[cardNumber]}</p>
            </div>
        </>
    );
}

export default ReactCard;