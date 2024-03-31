import { BrowserRouter , Route } from 'react-router-dom';

import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";

import Creators from './components/Creators';
import Branches from './components/Branches';



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Branches/>
        
        
        
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Creators/>
      </div>
    </BrowserRouter>
  );
}

export default App;
