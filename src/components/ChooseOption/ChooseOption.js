import React from 'react';
import './ChooseOption.scss'

//COMPONENTS
import Button from '../Button/Button';

const ChooseOption = ({ buttonText, LearnBtnHandler, CreateBtnHandler }) => {
    return (
        <div className="chooseOption">
            <Button
                buttonText={buttonText[0]}
                // btnHandler={LearnBtnHandler}
                buttonPath='/fishky/learn'
            />
            <Button
                buttonText={buttonText[1]}
                // btnHandler={CreateBtnHandler}
                buttonPath='/fishky/create'
            />
        </div>
    );
}

export default ChooseOption;