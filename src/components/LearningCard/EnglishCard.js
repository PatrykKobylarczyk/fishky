import React from 'react';
import { english } from '../Data/english'
import Logo from '../Logo/Logo';

const EnglishCard = ({option, cardNumber, curLoc}) => {
    return (
        <>
            <div className="card-face obverse">
                <Logo option={option} />
                <h2>{english.map(card => card.word)[cardNumber]}</h2>
            </div>
            <div className="card-face reverse">
                <Logo option={option} />
                <h2>{english.map(card => card.description)[cardNumber]}</h2>
            </div>
        </>
    );
}

export default EnglishCard;