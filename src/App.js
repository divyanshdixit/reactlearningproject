import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import * as Obj from './components/ExpoImpo';

function App() {
  return (
    <div className="App">

      <Example/>
      {Obj.default}
      {Obj.firstName()}
      {Obj.lastName()}
      {Obj.secondValue}
    </div>
  );
}

export default App;
