import { storeFactory } from "../test/testUtils";
import { correctGuess, guessWord } from "./actions";

describe(" guessWord action dispatcher ", () =>{
    const secretWord = "party";
    const unsucessfulGuess ="train";
    describe(" no guessed words",() =>{
        let store;
        const initialState = { secretWord }
        beforeEach(() =>{
            store = storeFactory(initialState)
            })
        test("updates state correctly for unsucessful guess", () =>{
            store.dispatch(guessWord(unsucessfulGuess))

            const expectedState = {
                ...initialState,
                sucess:false,
                guesswords: [
                    {
                        guessedword:unsucessfulGuess,
                        letterMatchCount : 3
                    }
                ] 

            }
            const newState = store.getState();
            expect ( newState ).toEqual(expectedState)
        });
        test("updates state correctly for sucessful guess", () =>{
            store.dispatch(guessWord(secretWord))
            const newState = store.getState();
            const expectedState = {
                secretWord,
                sucess: true,
                guesswords: [
                    {
                        guessedword:secretWord,
                        letterMatchCount : 5
                    }
                ] 

            }
            console.log("store", newState)
            expect ( newState ).toEqual(expectedState)
        })
    });
    describe(" some guessed word ", () =>{
        const guesswords = [ {guessedword : 'agile' , letterMatchCount: 1}]
        const initialState = { guesswords , secretWord }
        let store;
        beforeEach( () =>{
            store = storeFactory (initialState);
        })
        test("updates state correctly for unsucessful guess", () =>{
                store.dispatch(guessWord(unsucessfulGuess));
                const newState = store.getState();
                const expectedState = {
                    secretWord,
                    sucess: false,
                    guesswords: [
                        ...guesswords,
                        { guessedword : unsucessfulGuess , letterMatchCount : 3 }
                    ]
                }

                expect(newState).toEqual(expectedState)
        });
        test("updates state correctly for sucessful guess", () =>{
            store.dispatch(guessWord(secretWord))
            const newState = store.getState();
            const expectedState = {
                secretWord,
                sucess: true,
                guesswords: [
                    ...guesswords,
                    {
                        guessedword:secretWord,
                        letterMatchCount : 5
                    }
                ] 

            }
            expect ( newState ).toEqual(expectedState)
        })
    })
})