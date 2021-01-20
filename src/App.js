
import './App.css';
import Books from './Components/Books';
import Res from './Components/Restaurant'

const x = 10;

function App() { // functional component
  return (
    <>
      <h1> Hello {x} </h1>
      <Books/> 
      <Res/>
    </>
  );
}

export default App;
