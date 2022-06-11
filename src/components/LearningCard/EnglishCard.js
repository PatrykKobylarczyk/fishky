import React from 'react';
import { english } from '../Data/english'
import Logo from '../Logo/Logo';

const EnglishCard = ({ cardNumber }) => {
    return (
        <>
            <div className="card-face obverse">
                <Logo />
                <h2>{english.map(card => card.word)[cardNumber]}</h2>
            </div>
            <div className="card-face reverse">
                <Logo />
                <h2>{english.map(card => card.description)[cardNumber]}</h2>
            </div>
        </>
    );
}

export default EnglishCard;