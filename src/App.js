
import './App.css';
import React from 'react';
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
import ContextComponentD from './Components/ContextComponentD';
import TodoAppDemo from './Components/TodoAppDemo';
// import Provider from './Components/ContextApi';
import HocClickCounter from './Components/HocClickCounter';
import HocHoverCounter from './Components/HocHoverCounter';
import {Switch, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import Error404 from './Components/Error404';
import HookUseEffect from './Components/HookUseEffect';

const x = 10;
const Uname= "Divyansh"
var check = 'veg';


const NameContext = React.createContext(); // object =>return two component 
const userContext = React.createContext(); // object =>return two component 
const compoContext = React.createContext();

// consumer, provider => Component  

const {Provider, Consumer} = NameContext;

// if(check == 'veg'){
//   console.log('checked');
// }else{
//   console.log('not checked');
// }

// 16.8 => Hooks => state, props  useState(), lifecycle methods
function App() { // functional component, dumb, 
  return (
    <>
    <PassFunAsProps check="veg"/>
    
    <BindEventInClass/>

    <HookUseEffect/>
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route path='/' exact component={Home}/> */}
      <Route path='/about' exact render={ () => <About name="about"/> }/>
      <Route path='/contact' exact component={Contact}/>
      <Route component={Error404}/>
    </Switch>

    <HocClickCounter otherProps="Anything" pop1="jkjkjk"/>

    <HocHoverCounter/>

    <TodoAppDemo/>

    {/* responsible for  provding vlaue to all descendent compo */}
    <userContext.Provider value="Divyansh2">
      <compoContext.Provider value="Component context">
          <ContextComponentD/>
      </compoContext.Provider>
    </userContext.Provider>

    <RefForwardingParent/>

    <RefInClassParent/>

    <RefsComponent/>

    <MemoComponent/>

    <ComponentPure/>

    <ReactForm/>
    
    <LifeCycleA/>

    <h1 className={styles.heading}> Hello </h1>

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

export {Provider, Consumer, userContext, compoContext}
