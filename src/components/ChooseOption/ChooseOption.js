import React from 'react';
import './ChooseOption.scss'

//COMPONENTS
import Button from '../Button/Button';

const ChooseOption = ({ buttonText, LearnBtnHandler, CreateBtnHandler }) => {
    return (
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
    );
}

export default ChooseOption;