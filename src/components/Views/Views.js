import React from 'react';

//COMPONENTS
import Button from '../Button/Button';
import Category from '../Category/Category';


const Views = ({buttonText, StartLearningHandler, selectedCategory, setSelectedCategory}) => {
    return (
        <div className="learnMode">
            <Category 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />
            <Button
                buttonText={buttonText}
                btnHandler={StartLearningHandler}
                buttonPath='/fishky/learn/learning-card'
            />
        </div>
     );
}

export default Views;