import { combineReducers } from "redux";
import sucess from "./sucessReducer";
import guesswords from "./guessedWordReducer";
import secretWord from "./secretWordReducer";

export default combineReducers({
    sucess,
    guesswords,
    secretWord
})