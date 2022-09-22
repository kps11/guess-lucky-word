import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./index";

// describe('correctGuess' ,() =>{
//     test('retuns an action with type `CORRECT_GUESS`',() =>{
//         const action = correctGuess();
//         expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS})
//     })
// })

describe('getSecretWord' , ()=>{
    beforeEach(() =>{
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })


    test.only("secreteWord is returned ", () =>{
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:[{word: "party"}],
            })
        });

        //update to test app in redux
        return store.dispatch(getSecretWord ())
        .then((secretWord) => {
            const secretword = store.getState().secretWord
            expect(secretword).toBe("party")
        } )
    })
})