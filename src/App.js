import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
     <div className="content">
      <Navbar />
      <Home />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
     </div>
    </div>
  );
}

export default App;
