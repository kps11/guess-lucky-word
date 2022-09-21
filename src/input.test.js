import React from "react";
import { shallow  } from "enzyme";

import {checkProps, findByTestAttr} from "../test/testUtils";
import Input from "./input";

const mockSetCurrentGuess  = jest.fn();
jest.mock('react', () =>({
    ...jest.requireActual('react'),
    useState: (initalState) => [initalState,mockSetCurrentGuess] 
}))

const defaultProps = {
    secretWord : "lucky"
}

const setUp = (sucess= false,secretWord ="party") =>{
    return shallow(<Input sucess ={sucess} secretWord={secretWord}/>);
}

describe("render" ,() =>{
    describe("sucess id true",() => {
        let wrapper ;
        beforeEach(() =>{
            wrapper = setUp(true);
        })
        test("Input render without Error", () =>{
            const wrapper = setUp();
            const inputElement = findByTestAttr(wrapper , "component-input")
            expect(inputElement.length).toBe(1)
        })
        test("Input box does not show ",()=>{
            const inputBox = findByTestAttr(wrapper , "input-box")
            expect(inputBox.exists()).toBe(false)
        })

        test("submit button does not show ",()=>{
            const submitButton = findByTestAttr(wrapper , "submit-button")
            expect(submitButton.exists()).toBe(false)
        })
    });
    describe("sucess is false", ()=>{
        let wrapper ;
        beforeEach(() =>{
            wrapper = setUp(false);
        })
        test("Input render without Error", () =>{
            const wrapper = setUp();
            const inputElement = findByTestAttr(wrapper , "component-input")
            expect(inputElement.length).toBe(1)
        })
        test("Input box show ",()=>{
            const inputBox = findByTestAttr(wrapper , "input-box")
            expect(inputBox.exists()).toBe(true)
        })

        test("submit button show ",()=>{
            const submitButton = findByTestAttr(wrapper , "submit-button")
            expect(submitButton.exists()).toBe(true)
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
        wrapper = setUp();
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