import React from "react";
import { mount } from "enzyme";

import {checkProps, findByTestAttr ,storeFactory} from "../test/testUtils";
import Input from "./input";
import { Provider } from "react-redux";

const mockSetCurrentGuess  = jest.fn();
jest.mock('react', () =>({
    ...jest.requireActual('react'),
    useState: (initalState) => [initalState,mockSetCurrentGuess] 
}))

const defaultProps = {
    secretWord : "lucky" 
}
 
const setUp = (initalState={}, secretWord ="party") =>{
    const store = storeFactory(initalState);
    return mount(<Provider store ={store}><Input secretWord={secretWord}/></Provider>);
}

describe("render" ,() =>{
    describe("sucess is false",() => {
        let wrapper ;
        beforeEach(() =>{
            wrapper = setUp({sucess: false});
        })
        test("Input render without Error", () =>{
            const wrapper = setUp();
            const inputElement = findByTestAttr(wrapper , "component-input")
            expect(inputElement.length).toBe(1)
        })
        test("Input box does not show ",()=>{
            const inputBox = findByTestAttr(wrapper , "input-box")
            expect(inputBox.exists()).toBe(true);
        })

        test("submit button does not show ",()=>{
            const submitButton = findByTestAttr(wrapper , "submit-button")
            expect(submitButton.exists()).toBe(true);
        })
    });
    describe("sucess is true", ()=>{
        let wrapper ;
        beforeEach(() =>{
            wrapper = setUp({sucess: true});
        })
        test("Input render without Error", () =>{
            const wrapper = setUp();
            const inputElement = findByTestAttr(wrapper , "component-input")
            expect(inputElement.length).toBe(1)
        })
        test("Input box show ",()=>{
            const inputBox = findByTestAttr(wrapper , "input-box")
            expect(inputBox.exists()).toBe(false)
        })

        test("submit button show ",()=>{
            const submitButton = findByTestAttr(wrapper , "submit-button")
            expect(submitButton.exists()).toBe(false)
        })
    })

})

describe(" testing input component", () =>{
  

    test("doese not throw warning with expected props", () =>{
        checkProps(Input, defaultProps)
    })
})


describe("state controlled input field", () => {
    let wrapper;
    beforeEach(() =>{
        wrapper = setUp({sucess: false});
        mockSetCurrentGuess.mockClear();
     
    })

    test("state updates with value of input box upon change", () =>{
        const inputBox  = findByTestAttr(wrapper,"input-box");

        const mockEvent = { target : { value :"train"}};
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toBeCalledWith("train");
        
    });
    test ("field is clreared upon submit button click", () =>{
        const submitButton  = findByTestAttr(wrapper,"submit-button");
        submitButton.simulate("click", { preventDefault (){}})
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
    })

})