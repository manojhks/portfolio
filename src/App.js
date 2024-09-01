import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './Navbar';
import { About } from './About';
import { Project } from './Project';
import { Contact } from './Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Example />
      <Routes>
    <Route path='/' element={<About/>} />
    <Route path='/project' element={<Project/>} />
    <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
