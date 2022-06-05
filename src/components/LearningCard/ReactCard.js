import React from 'react';
import { react } from '../Data/react'
import Logo from '../Logo/Logo';


const ReactCard = ({option, cardNumber, curLoc}) => {
    return (
        <>
            <div className="card-face obverse">
                <Logo option={option} />
                <h2>{react.map(card => card.word)[cardNumber]}</h2>
            </div>
            <div className="card-face reverse">
                <Logo option={option} />
                <p>{react.map(card => card.description)[cardNumber]}</p>
            </div>
        </>
    );
}

export default ReactCard;