import { actionTypes } from "../actions";
import sucessReducer from "./sucessReducer";


test(" when previous state is undefined , return false ", () =>{
    const newState = sucessReducer(undefined , {});
    expect(newState).toBe(false);
});


test(" return previous state when unknown action type" , () =>{
    const newState = sucessReducer(false , { type : 'unknown'});
    expect(newState).toBe(false);
})

test (" return true for action type CORRECT GUESS" ,() =>{
    const newState = sucessReducer(false , { type : actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
})