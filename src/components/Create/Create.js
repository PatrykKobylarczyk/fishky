import React, { useState } from 'react';
import Category from '../Category/Category';
import './Create.scss'

import { english } from '../Data/english'
import { react } from '../Data/react'


const Create = ({ selectedCategory, setOption, setSelectedCategory }) => {

    const [word, setWord] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);

    const newCardHandler = (e) => {
        e.preventDefault();
        if (word === '' && description === '') {
            setError(true)
            return;
        }
        debugger;
        if (selectedCategory === 'english') {
            //check if array includes that word in object 
            (
                english.filter(item => item.word === word).length !== 0
                    ? console.log('dziala')
                    : english.push({
                        id: english.length + 1,
                        word: word,
                        description: description
                    })
            )
        }
        if (selectedCategory === 'react') {
            (
                react.filter(item => item.word === word).length !== 0
                    ? console.log('react dziala')
                    : react.push({
                        id: react.length + 1,
                        word: word,
                        description: description
                    })
            )
        }
        setOption(['learn', 'create'])
    }

    return (
        <form className='newCardForm' onSubmit={newCardHandler}>
            <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <input type='text' name='obverse' placeholder=' enter obverse...' className='obverseInput' onChange={e => setWord(e.target.value)}></input>
            <input type='text' name='reverse' placeholder='enter reverse...' className='reverseInput' onChange={e => setDescription(e.target.value)}></input>
            <button type='submit' className='btn'>create</button>
            {error && <p>fill both inputs</p>}
        </form>
    )
}

export default Create;