
import './App.css';
import Books from './Components/Books';
import Food from './Components/Food';

const x = 10;
var check = 'veg';

// if(check == 'veg'){
//   console.log('checked');
// }else{
//   console.log('not checked');
// }

function App() { // functional component
  return (
    <>
      <h1> Hello {x} </h1>
      <Food category={check}/>
      <Books bookname="book1" authorname="author1" />
      <Books bookname="book2" authorname="author2"/>
    </>
  );
}

export default App;
