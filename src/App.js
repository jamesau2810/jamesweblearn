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
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import GlobalGood from './components/GlobalGood';
function extraApp() {
  return (
    <div className='App'>
          <Greet name = "Johnny" score = {90}>
        <p>She is TA</p>
      </Greet>
      <Greet name = "Jenny" score = {60}>
        <button>Contact</button>
      </Greet>
      <Greet name = "Ying" score = {70} />
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
      {/* <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>  */}
      <ClickCounter name= "Joshua"/>
      <HoverCounter name = "Leon"/>
      <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggIn)=>isLoggIn? "Davy":"Guest"}/>
      <CounterTwo 
      render = {(count,incrementCount)=>(
      <ClickCounterTwo count={count} incrementCount={incrementCount}>
      </ClickCounterTwo>)}/>
      <CounterTwo 
      render = {(count,incrementCount)=>(
      <HoverCounterTwo count={count} incrementCount={incrementCount}>
      </HoverCounterTwo>)}/>
      <UserProvider value="JeffChan">
        <ComponentC/>
      </UserProvider>
      
    </div> 
  );  
}
class App extends Component {
  render(){
    return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element = {<About></About>}></Route>
        <Route path='order-summary' element = {<OrderSummary></OrderSummary>}></Route>
        <Route path='original' element = {extraApp()}></Route>
        <Route path='global-good' element = {<GlobalGood></GlobalGood>}></Route>
      </Routes>
      </>
    );
    // return (
      
    // );
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

/** 
Emirates	 United Arab Emirates	3	6	10	12	124		Largest 777 operator.
Qatar Airways	 Qatar			7		57	28	
Air France	 France		18			43	2	Launch customer of 777-300ER and 777F. 777-200ER to be retired.
Cathay Pacific	 Hong Kong	5			17	35		Launch customer of 777-300.
Saudia	 Saudi Arabia		23			35	4	
EVA Air	 Taiwan					34	6	
Turkish Airlines	 Turkey					33	8	
Air China	 China	10				28		
Korean Air	 South Korea		14		4	25	12	
Aeroflot	 Russia		2			22		No longer supported by Boeing as an effect of the Russian invasion of Ukraine.
Singapore Airlines	 Singapore		46		12	22		
United Airlines	 United States	19	55			22		Launch customer of 777-200.
American Airlines	 United States		47			20		
China Eastern Airlines	 China					20		
Air Canada	 Canada			6		19		
Air India	 India	1	3	5		19		
Thai Airways	 Thailand	8	3[25]		6	17	2	777F operated by Southern Air. 777-200ER to be retired.
British Airways	 United Kingdom	5	43			16		Launch customer of 777-200ER.
KLM	 Netherlands		15			16		777-200ER to be retired.
China Southern Airlines	 China	4	6			15	19	
All Nippon Airways	 Japan	2	8		4	13	2	777-200 and 777-300 to be retired.
Japan Airlines	 Japan	15	11		7	12		
Swiss International Air Lines	 Switzerland					12		
Air New Zealand	 New Zealand		10			10		Some to be retired, and some are leased from Cathay Pacific.
China Airlines	 Taiwan					10	9	
Kuwait Airways	 Kuwait		2			10		
LATAM Brasil	 Brazil					10		
TAM Linhas Aéreas	 Brazil					10		Rebranded to LATAM Brasil in 2016.
Philippine Airlines	 Philippines					9		
Etihad Airways	 United Arab Emirates			5		8	5	
Garuda Indonesia	 Indonesia	2				8		777-200 leased from China Southern Airlines. Some to be retired due to fleet reduction and COVID-19 pandemic.
Azur Air	 Russia					7		No longer supported by Boeing as an effect of the Russian invasion of Ukraine.
EgyptAir	 Egypt		2			6		
Jet Airways	 India					6		Temporarily ceased operations in 2019.
Nordwind Airlines	 Russia		6			6		No longer supported by Boeing as an effect of the Russian invasion of Ukraine.
Rossiya Airlines	 Russia		2		5	5		No longer supported by Boeing as an effect of the Russian invasion of Ukraine.
TAAG Angola Airlines	 Angola		3			5		
V Australia	 Australia					5		Merged into Virgin Australia in 2011.
Virgin Australia	 Australia					5		Retired in 2020 due to the COVID-19 pandemic.
Biman Bangladesh Airlines	 Bangladesh	2	3			4		
Ethiopian Airlines	 Ethiopia			6		4	9	
Gulf Air	 Bahrain					4		Leased from Jet Airways.
Pakistan International Airlines	 Pakistan		6	2		4		Launch customer of 777-200LR.
Southwind Airlines	 Turkey					4		
Air Austral	 Reunion		3	1		3		
Kenya Airways	 Kenya		4			3		
Mavi Gök Aviation	 Turkey					3		
Royal Flight	 Russia					3		Ceased operations in 2022.
Eastern Airlines	 United States		2			2	35	
Kalitta Air	 United States					2	8	777F operated by DHL.
Turkmenistan Airlines	 Turkmenistan			4		2		
Alitalia	 Italy		11			1		Ceased operations in 2021.
Azur Air Ukraine	 Ukraine					1		Operated by Azur Air.
VIM Airlines	 Russia		12		1	1		Ceased operations in 2017.
*/