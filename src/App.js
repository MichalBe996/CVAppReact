import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import PersonalAndExperience from './components/PersonalAndExp';
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalAndExperience />
      <Skills />
    </div>
  );
}

export default App;
