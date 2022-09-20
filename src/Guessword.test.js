import React from "react";
import {shallow } from "enzyme";
import { findByTestAttr ,checkProps} from '../test/testUtils';
import Guessword from "./Guessword";


const defaultProps = {
    guesswords: [{guessedword : "train ", letterMatchCount : 3}] 
} 

const setUp = (props ={}) =>{
    const setupProps = {...defaultProps,...props}
    return shallow(<Guessword {...setupProps}/>);
}

describe("guess word test ", () =>{

    test('does not throw warning wit expected props', () =>{
        checkProps(Guessword,defaultProps)
    })
})

describe("if there is no guess word", () =>{
    let wrapper
    beforeEach ( () => {
         wrapper = setUp({guesswords: []})
    })
    test("render without no error", () =>{
       const component = findByTestAttr(wrapper , "component-guessed-word");
       expect(component.length).toBe(1)
    }),
    test("renders instructions to guess word ",()=>{
       const instructionComponent = findByTestAttr(wrapper , "component-instruction");
       expect(instructionComponent.text().length).not.toBe(0)
    })
})

describe("if there is guess word ",() =>{
    let wrapper;
    let guesswords =[
        {
            guessedword:"train", letterMatchCount :3
        },
        {
            guessedword:"agile", letterMatchCount :1
        },
        {
            guessedword:"party", letterMatchCount :5
        }
    ]

    beforeEach (() =>{
        wrapper = setUp({guesswords})
    })

    test("render without no error", () =>{
        const component = findByTestAttr(wrapper , "component-guessed-word");
        expect(component.length).toBe(1)
     })
     test ("render guessed words section ", () =>{
        const guessedWordNode = findByTestAttr(wrapper, "guessed-words");
        expect(guessedWordNode.length).toBe(1)
     })

     test ("correct number of guesssed words", () =>{
        const guessedWordNodes = findByTestAttr(wrapper, "guessed");
        expect(guessedWordNodes.length).toBe(guesswords.length)
     })
})