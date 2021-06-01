import '../src/css/global.css'
import Header from '../src/Header'
import Hero from '../src/Hero'
import Services from '../src/services'
import Contact from '../src/contact'
import Testimonials from '../src/Testimonials'
import Slide from 'react-reveal/Slide';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Services />
      <Slide left>
        <Contact />
      </Slide>
    <Testimonials />
    </>
  );
}

export default App;
