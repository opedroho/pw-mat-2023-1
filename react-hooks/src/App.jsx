import './App.css'
import './style.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Exercicio01 from './exercicios/01'
import Exercicio02 from './exercicios/02'
import Exercicio03 from './exercicios/03'
import Exercicio04 from './exercicios/04'
import Exercicio05 from './exercicios/05'
//import Exercicio06 from './exercicios/06'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <h1> Exercicios de React Hooks </h1>
      <BrowserRouter>
        <ul className="menu">
          <li> <Link to="/01"> Exercicio 01 </Link> </li>
          <li> <Link to="/02"> Exercicio 02 </Link> </li>
          <li> <Link to="/03"> Exercicio 03 </Link> </li>
          <li> <Link to="/04"> Exercicio 04 </Link> </li>
          <li> <Link to="/05"> Exercicio 05 </Link> </li>
          <li> <Link to="/06"> Exercicio 06 </Link> </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/01" element={<Exercicio01 />} />
          <Route path="/02" element={<Exercicio02 />} />
          <Route path="/03" element={<Exercicio03 />} />
          <Route path="/04" element={<Exercicio04 />} />
          <Route path="/05" element={<Exercicio05 />} />
          <Route path="/06" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
