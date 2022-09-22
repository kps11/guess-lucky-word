import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import App from "./App";
import { findByTestAttr, storeFactory } from "../test/testUtils";

//active global mock to make sure getSecretWord doesn't make network call

jest.mock('./actions')

const setUp = (initialState = {}) =>{
    //Apply state 
    const store = storeFactory (initialState)
    const wrapper = mount ( <Provider store={store}><App {...initialState}/></Provider>)

    //add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate("change", {target: { value : "train"}})

    //simulate click on submit button 
    const submitButton = findByTestAttr (wrapper ,"submit-button");
    submitButton.simulate("click", { preventDefault(){}})
    return wrapper;
}


describe("no words been guessed" , () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = setUp(
            {
                secretWord:'party',
                sucess:false,
                guesswords:[]
            }
        )
    })

    test(" create guessedword tabele with  one row ",() =>{
        const gueesedWordRows =   findByTestAttr(wrapper, "guessed");
        expect(gueesedWordRows).toHaveLength(1)
    })
})

describe("some words been gueesed", () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = setUp(
            {
                secretWord:'party',
                sucess:false,
                guesswords:[{ guessedword : "agaile" , letterMatchCount : 1}]
            }
        )
    })

    test(" create guessedword tabele with  one row ",() =>{
        const gueesedWordRows =   findByTestAttr(wrapper, "guessed");
        expect(gueesedWordRows).toHaveLength(2)
    })
})

describe("guess secret word", () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = setUp(
            {
                secretWord:'party',
                sucess:false,
                guesswords:[{ guessedword : "agile" , letterMatchCount : 1}]
            }
        );

        const inputBox = findByTestAttr(wrapper, 'input-box');
        inputBox.simulate("change", {target: { value : "party"}})
    
        //simulate click on submit button 
        const submitButton = findByTestAttr (wrapper ,"submit-button");
        submitButton.simulate("click", { preventDefault(){}})
    })
    test("add rows to gueed word tabel", () =>{
        const gueesedWordRows =   findByTestAttr(wrapper, "guessed");
        expect(gueesedWordRows).toHaveLength(3)
    });
    test("display congrats message", () =>{
        const congratsComponent = findByTestAttr(wrapper, "component-congrats");
        expect(congratsComponent.text().length).toBeGreaterThan(0) 
    })

    test("does not display input components contents ", () =>{
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(false)
        const submitButton = findByTestAttr (wrapper ,"submit-button");
        // submitButton.simulate("click", { preventDefault(){}})
    })
   
})