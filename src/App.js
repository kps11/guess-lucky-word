import './App.css';
import { useSelector ,useDispatch } from 'react-redux'; 
import Congrats from './Congrats';
import Guessword from './Guessword';
import Input from './input';
import { useEffect } from 'react';
import { getSecretWord } from "./actions"


function App() {
  //props
  const sucess = useSelector (state => state.sucess);
  // const secretWord ='party'
  const secretWord = useSelector(state => state.secretWord)
  const guesswords= useSelector (state => state.guesswords)
  const dispatch = useDispatch()
  useEffect ( () =>{
    dispatch( getSecretWord())
  },[])
  return (
    <div className="container" data-test = "component-app">
      <div>The secret word is {secretWord}</div>
      <h1>Guess lucky word</h1>
      <Input sucess= {sucess} secretWord= {secretWord}/>
     <Congrats sucess= {sucess}/>
     <Guessword guesswords ={guesswords}/>
    </div>
  );
}

export default App;
