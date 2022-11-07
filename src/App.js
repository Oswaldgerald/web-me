import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Projects from './components/Projects/Projects';
import Reasons from './components/Reasons/Reasons';
import Join from './components/Join/Join'
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Projects/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}



export default App;
