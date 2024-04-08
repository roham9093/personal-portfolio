import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ProjectCard/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
