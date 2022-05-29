import React from 'react';
import Select from 'react-select'

import './Category.scss'

const options = [
    { value: 'english', label: 'english' },
    { value: 'react', label: 'react' },
]

const colourStyles = {
    control: (styles) => ({
        ...styles,
        width: '100%',
        height: '80px',
        border: 'none',
        borderRadius: '10px',
        color: 'rgb(255, 255, 255)',
        background: 'rgb(240, 3, 43)',
        boxShadow: '3px 3px 10px 3px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
        padding: ' 0 20px'
    }),
    placeholder: (defaultStyles) => ({
        ...defaultStyles,
        color: 'rgb(255, 255, 255)',
    }),

    indicatorSeparator: () => ({
        display: 'none'
    }),
    menu: () => ({
        background: 'rgb(255, 255, 255)',
        borderRadius: '10px'
    }),
    option: (styles, { isFocused }) => ({
        ...styles,
        background: 'none',
        color: isFocused ? 'rgb(240, 3, 43)' : 'rgb(0, 0, 0)',
        cursor: 'pointer',
        fontWeight: 500,
    })
};


const Category = ({ selectedCategory, setSelectedCategory }) => {


    const handleChange = (e) => {
        setSelectedCategory(e.value)
    }

    return (
        <div className="btn select">
            <Select
                value={selectedCategory}
                options={options}
                styles={colourStyles}
                onChange={handleChange}
                placeholder={selectedCategory}
            />
        </div>
    );
}

export default Category;