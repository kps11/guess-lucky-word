import axios from "axios";
import { getLetterMatchCount } from "../helpers"
export const actionTypes = {
    CORRECT_GUESS : "CORRECT_GUESS",
    GUESS_WORD : "GUESS_WORD"
}



export const guessWord = ( guessedword ) =>{
    return function( dispatch , getState) {
        const secretword = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedword , secretword)

        dispatch({
            type:actionTypes.GUESS_WORD,
            payload: { guessedword , letterMatchCount}
        })

        if( guessedword === secretword){
            dispatch({
                type : actionTypes.CORRECT_GUESS
            })
        }
    }
}

export const getSecretWord = () =>{
    //return response from server

    return axios.get("http://localhost:3030")
        .then(response  => response.data)
}