import React, { useState } from 'react';
import './Flashcard.scss'

//DATA
import { english } from '../Data/english'

//ICONS
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

//COMPONENTS
import Logo from '../Logo/Logo';
import ChooseOption from '../ChooseOption/ChooseOption';
import Views from '../Views/Views';
import LearningCard from '../LearningCard/LearningCard';
import { IconContext } from 'react-icons';
import { react } from '../Data/react';

const Flashcard = () => {

    const [option, setOption] = useState(['learn', 'create'])
    const [selectedCategory, setSelectedCategory] = useState('english')
    const [learning, setLearning] = useState(false)
    const [isFlipped, setFlipped] = useState(false)
    const [cardNumber, setCardNumber] = useState(0)


    const cardFlipHandler = () => {
        learning && setFlipped(prev => !prev)
    }

    const LearnBtnHandler = () => {
        setOption(['start'])
    }

    const CreateBtnHandler = () => {
        setOption(['create'])
    }

    const StartLearningHandler = () => {
        setLearning(true)
        setOption([`${selectedCategory}`])
    }

    const nextCard = () => {
        setTimeout(() => {
            switch (selectedCategory) {
                case 'english':
                    if (cardNumber === english.length - 1) {
                        setCardNumber(0)
                    } else {
                        setCardNumber(prev => prev + 1)
                    }
                    break;
                case 'react':
                    if (cardNumber === react.length - 1) {
                        setCardNumber(0)
                    } else {
                        setCardNumber(prev => prev + 1)
                    }
                    break;
                default:
                    console.log('Oop, I did it again:)');
            }
        }, 65);

        setFlipped(false)
    }

    const prevCard = () => {
        setTimeout(() => {
            switch (selectedCategory) {
                case 'english':
                    if (cardNumber === 0) {
                        setCardNumber(english.length - 1)
                    } else {
                        setCardNumber(prev => prev - 1)
                    }
                    break;
                case 'react':
                    if (cardNumber === 0) {
                        setCardNumber(react.length - 1)
                    } else {
                        setCardNumber(prev => prev - 1)
                    }
                    break;
                default:
                    console.log('Oop, I did it again:)');
            }
        }, 65);
        setFlipped(false)
        console.log(cardNumber);
    }

    return (
        <IconContext.Provider value={{ size: 30, color: 'rgb(80, 80, 80)' }}>
            <div className="appView">

            {/* learning part */}
                {learning && <span className='navIcon' onClick={prevCard}><MdOutlineArrowBackIos /></span>}
                <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={cardFlipHandler}>
                    {!learning && <Logo option={option} />}
                    {option.length === 2 &&
                        <ChooseOption
                            buttonText={option}
                            LearnBtnHandler={LearnBtnHandler}
                            CreateBtnHandler={CreateBtnHandler}
                        />}
                    {option.includes('start') &&
                        <Views
                            buttonText={option}
                            StartLearningHandler={StartLearningHandler}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />}
                    {learning &&
                        <LearningCard
                            option={option}
                            isFlipped={isFlipped}
                            cardNumber={cardNumber}
                            selectedCategory={selectedCategory}
                        />}
                </div>
                {learning && <span className='navIcon' onClick={nextCard}><MdOutlineArrowForwardIos /></span>}
            </div>
        </IconContext.Provider>
        // creating part
                        

    );
}

export default Flashcard;