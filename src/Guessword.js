import React from 'react';
import PropTypes from "prop-types";
function Guessword(props) {
    let contents;
    if (props.guesswords.length  === 0){
        contents = (
            <span data-test ="component-instruction"> try to get the screte word </span>
        )
    }else {
       const guessedWordsRows = props.guesswords.map((word,index) => {
       return <tr data-test ="guessed" key ={index}>
            <td>
                {word.guessedword}
            </td>
            <td>
                {word.letterMatchCount}
            </td>
        </tr>
       })
        contents =(
            <div data-test ="guessed-words">
                <h3>Guessed Words</h3>
                <table className='table table-sm'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                         { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test ="component-guessed-word">
            {contents}
        </div>
    ); 
}


Guessword.propTypes ={
    guesswords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedword: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
}
export default Guessword;
// MAHI110522


// 06742563855