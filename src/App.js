import './App.css';
import Hero from './components/Hero/Hero';
// import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Reasons from './components/Reasons/Reasons';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Projects/>
      <Reasons/>
    </div>
  );
}

export default App;
