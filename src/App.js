
import './App.css';
import Books from './Components/Books';
import Food from './Components/Food';
import FirstClassCompo from './Components/ClassComponentEx';
import WithConstructor from './Components/ClassCompoWithConstructor';
import UseStateHook from './Components/UseStateHook';

const x = 10;
var check = 'veg';

// if(check == 'veg'){
//   console.log('checked');
// }else{
//   console.log('not checked');
// }

// 16.8 => Hooks => state, props  useState(), lifecycle methods
function App() { // functional component, dumb, 
  return (
    <>
      <h1> Hello {x} </h1>
      <WithConstructor age="25"/>
      <FirstClassCompo age="24"/>
      <Food category={check}/>
      <Books bookname="book1" authorname="author1" />
      <Books bookname="book2" authorname="author2"/>

      <UseStateHook/>
    </>
  );
}

export default App;
