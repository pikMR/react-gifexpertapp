import React, { useState } from 'react';
import PropTypes from 'prop-types'
//const handleAdd = (el) =>{(setCategorias((list)=>[...list,'ppp']))}
const AddCategory = ({setCategorias}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit_hecho');
        if(inputValue.trim().length > 2){
            setCategorias((list)=>[inputValue,...list]);
            setinputValue('');  
        }
    }

    return (
                
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias : PropTypes.func.isRequired
}

export default AddCategory;
