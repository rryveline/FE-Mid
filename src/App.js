import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import app from 'firebase/app';


const App = () => {
  return (
  /* JSX */
  <div id="page-wrap">
  <Header />
  <main>
    <About />
    <Hobbies />
    <Education />
    <Skills />
    <Experience />
    <Portfolio />
  </main>
  <Footer />
</div>

  );
};

export default App;
