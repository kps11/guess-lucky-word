import logo from './logo.svg';
import './App.css';
import Congrats from './Congrats';
import Guessword from './Guessword';
import Input from './input';


function App() {
  //props
  const sucess = false;
  const secretWord ='party'
  const guesswords= []
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
