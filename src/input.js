import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

function Input(props) {
    const { secretWord } = props
    const [ currentGuess , setCurrentGuess] = useState("")
    const sucess = useSelector ( state => state.sucess)


    if(sucess){
       return  <div data-test = "component-input"/>
    }else{
    return (
        <div data-test = "component-input">
            < form className='form-inline'>
                <input 
                    data-test= 'input-box' 
                    className='mb-2 mx-sm-3'
                    type="text" 
                    placeholder='Enter guess' 
                    value={currentGuess} 
                    onChange ={(event) => setCurrentGuess(event.target.value)} 
                    />
                <button data-test ="submit-button"
                    className='btn btn-primary mb-2'
                    onClick={(event) =>{
                        event.preventDefault();
                        setCurrentGuess("") 
                    }}>
                        Submit
                    </button>
            </form>
        </div>
    )};
}

Input.propTypes = {
    secretWord : PropTypes.string.isRequired,
}

export default Input;