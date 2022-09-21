import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";


const setUp = (state = {}) =>{
    //Apply state 
    const wrapper = mount (<App {...state}/>)

    //add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate("change", {target: { value : "train"}})

    //simulate click on submit button 
    const submitButton = findByTestAttr (wrapper ,"submit-button");
    submitButton.simulate("click", { preventDefault(){}})
    return wrapper;
}


describe.skip("no words been guessed" , () =>{
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

describe.skip("some words been gueesed", () =>{
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

describe.skip("guess secret word", () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = setUp(
            {
                secretWord:'party',
                sucess:false,
                guesswords:[{ guessedword : "agaile" , letterMatchCount : 1}]
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
        submitButton.simulate("click", { preventDefault(){}})
    })
   
})