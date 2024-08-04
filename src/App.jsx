import Navbar from './sections/navbar/Navbar';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Header from './sections/header/Header';
import Skills from './sections/skills/Skills';



const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      {/* <Services /> */}
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
