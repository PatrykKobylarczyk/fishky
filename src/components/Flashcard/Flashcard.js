import React from 'react';

import './Flashcard.scss'
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Flashcard = ({buttonText, LearnBtnHandler, CreateBtnHandler}) => {
    return (
        <div className="card">
            <Logo />
            <div className="chooseOption">
                <Button
                    buttonText={buttonText[0]}
                    btnHandler={LearnBtnHandler}
                />
                <Button
                    buttonText={buttonText[1]}
                    btnHandler={CreateBtnHandler}
                />
            </div>
        </div>
    );
}

export default Flashcard;