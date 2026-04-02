import {BrowserRouter ,Routes , Route , Link} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/index.js";
import Skills from "./Components/Skills/index.js";
import Contacts from "./Components/Contacts/index.js";
import Home from "./Components/Home/index.js";
import Projects from "./Components/Projects/index.js";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/skills" element={<Skills/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;