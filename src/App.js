import './App.css';
import Congrats from './Congrats';
import Guessword from './Guessword';
import Input from './input';
import { useEffect } from 'react';
import { getSecretWord } from "./actions"


function App() {
  //props
  const sucess = false;
  const secretWord ='party'
  const guesswords= []

  useEffect ( () =>{
      getSecretWord()
  },[])
  return (
    <div className="container" data-test = "component-app">
      <h1>Guess lucky word</h1>
      <Input sucess= {sucess} secretWord= {secretWord}/>
     <Congrats sucess= {sucess}/>
     <Guessword guesswords ={guesswords}/>
    </div>
  );
}

export default App;
