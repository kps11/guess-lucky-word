//receive the sucess state as prop

import React from 'react';
import PropTypes from "prop-types";


function Congrats(props) {
    const {sucess} = props;
    if( props.sucess){
        return (<div data-test ="component-congrats" className='alert alert-success'>
            <span data-test ="congrats-message">
                Congratulations! You guessed the word !
            </span>
        </div>)
    }else{
       return ( <div data-test ="component-congrats"/> )

    }
        
        
}

Congrats.propTypes = {
    sucess : PropTypes.bool.isRequired,
}

export default Congrats;
