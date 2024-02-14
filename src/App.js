// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import React,{ Component } from 'react';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render(){
    
    return (
      <div className='App'>
        <Greet name = "David" score = {90}>
          <p>He is TA</p>
        </Greet>
        <Greet name = "Phoebe" score = {60}>
          <button>Contact</button>
        </Greet>
        <Greet name = "Clara" score = {70} />
        <Welcome />
        <Hello />
        <Counter></Counter>
        <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <ParentComponent/>
        <UserGreeting/>
        <NameList/>
        <StyleSheet primary = {true}/>
        <Inline/>
        <Form/>
        <h1 className='error'>Error</h1>
        <h1 className=''>Success</h1>
        <LifecycleA></LifecycleA>
        <FragmentDemo/>
        <Table></Table>
        <ParentComp/> 
        <RefsDemo/> 
        <FocusInput />
        <FRParentInput />
        <PortalDemo></PortalDemo>
        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> 
        <ClickCounter name= "James"/>
        <HoverCounter name = "Phoebe"/>
        <ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render={(isLoggIn)=>isLoggIn? "Vishwas":"Guest"}/>
        <CounterTwo 
        render = {(count,incrementCount)=>(
        <ClickCounterTwo count={count} incrementCount={incrementCount}>
        </ClickCounterTwo>)}/>
        <CounterTwo 
        render = {(count,incrementCount)=>(
        <HoverCounterTwo count={count} incrementCount={incrementCount}>
        </HoverCounterTwo>)}/>
        <UserProvider value="Vishwas">
          <ComponentC/>
        </UserProvider>
        
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Greet>Hej</Greet>
//     </div>
//   );
// }

export default App;
// {/* <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Hello World
//   {/* Edit <code>src/App.js</code> and save to reload. */}
// </p>
// {/* <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header> */ */}

