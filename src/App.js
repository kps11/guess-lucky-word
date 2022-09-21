import logo from './logo.svg';
import './App.css';
import Congrats from './Congrats';
import Guessword from './Guessword';
import Input from './input';


function App() {
  return (
    <div className="container">
      <h1>Guess lucky word</h1>
      <Input secretWord='lucky'/>
     <Congrats sucess= {true}/>
     <Guessword guesswords ={[
        {
            guessedword:"train", letterMatchCount :3
        },
        {
            guessedword:"agile", letterMatchCount :1
        },
        {
            guessedword:"party", letterMatchCount :5
        }
    ]}/>
    </div>
  );
}

export default App;
