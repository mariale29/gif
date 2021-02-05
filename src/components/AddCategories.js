import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategories = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({ target: { value } }) => setInputValue(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories(cats =>[inputValue,...cats]);
            setInputValue('');
        }
       
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
           <h1>{ inputValue }</h1>
           <input
            type ="text"
            value= { inputValue }
            onChange= { handleInputChange }
           />
        </form>
    )
}

AddCategories.propTypes = {
   setCategories: PropTypes.func.isRequired 
};

export default AddCategories;
