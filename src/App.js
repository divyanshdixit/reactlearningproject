
import './App.css';
import styles from './Style.module.css';
import Books from './Components/Books';
import Food from './Components/Food';
import FirstClassCompo from './Components/ClassComponentEx';
import WithConstructor from './Components/ClassCompoWithConstructor';
// import UseStateHook from './Components/UseStateHook';
import DigitalClock from './Components/DigitalClock';
import ClockDigital from './Components/ClockDigital';
import Counter from './Components/Counter';
import ReactForm from './Components/ReactForms';
import Forms from './Components/FormsReact';
import Form2 from './Components/FormsReact2';
import Form3 from './Components/FormsReact3';
import Counters from './Components/Counters';
import ToDoApp from './Components/ToDoApp';
import ClassCompoA from './Components/ClassCompoA';
import BindEventInClass from './Components/BindEventInClass';
import GetPropAsFun from './Components/GetPropAsFun';
import PassFunAsProps from './Components/PassFunAsProps';
import LifeCycleA from './Components/LifeCycleA';
import ComponentPure from './Components/PureComponent';
import MemoComponent from './Components/MemoComponent';
import RefsComponent from './Components/RefsComponent';
import RefInClassParent from './Components/RefInClassParent';
import RefForwardingParent from './Components/RefForwardingParent';

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
    <RefForwardingParent/>

    <RefInClassParent/>

    <RefsComponent/>

    <MemoComponent/>

    <ComponentPure/>

    <ReactForm/>
    
    <LifeCycleA/>

    <h1 className={styles.heading}> Hello </h1>
    <PassFunAsProps/>

    <ClassCompoA id="1"> 
      <p> This is childeren for class compo A </p>
    </ClassCompoA>

    <ToDoApp/>

    <Counters/>

    <Form3/>
    
    <Form2/>

    <Forms/>

    <ClockDigital/>

    {/* <ReactForm/> */}
      <h1> Hello {x} </h1>
      <WithConstructor age="25"/>
      <FirstClassCompo age="24"/>
      <Food category={check}/>
      <Books bookname="book1" authorname="author1" />
      <Books bookname="book2" authorname="author2"/>

      {/* <UseStateHook/> */}

      <DigitalClock/>

      <Counter/>

    </>
  );
}

export default App;
