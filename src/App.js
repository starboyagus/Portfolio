import logo from './logo.svg';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Header } from './components/Header';
import { Main } from './components/Main';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';





function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />

      <img src={logo} />
    </div>
  );
}

export default App;
