import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
import Creators from './components/Creators';
import Branches from './components/Branches';
import ImageSlider from './components/ImageSlider'; // Import ImageSlider
import ChatWindow from './components/ChatWindow';

const App = () => {
  // Define your images array
  const images = [
    '/src/assets/image1.jpeg',
    '/src/assets/image2.jpeg',
    '/src/assets/image3.jpeg',
    '/src/assets/image4.jpeg',
    '/src/assets/image5.jpeg',
    '/src/assets/image6.jpeg',
    '/src/assets/image7.jpeg',
    '/src/assets/image8.jpeg',
    // Add more image paths here...
  ];

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Branches/>
        <ImageSlider images={images} /> {/* Add ImageSlider */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Creators/>
      </div>
      <ChatWindow />
    </BrowserRouter>
  );
}

export default App;
