import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Exercicio01 from './exercicios/01'

function App() {

  return (
    <div className="App">
      <h1> Exercicios de React Hooks </h1>
      <BrowserRouter>
        <ul>
          <li> <Link to="/01"> Exercicio 01 </Link> </li>
          <li> <Link to="/02"> Exercicio 02 </Link> </li>
          <li> <Link to="/03"> Exercicio 03 </Link> </li>
          <li> <Link to="/04"> Exercicio 04 </Link> </li>
          <li> <Link to="/05"> Exercicio 05 </Link> </li>
          <li> <Link to="/06"> Exercicio 06 </Link> </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/01" element={<Exercicio01 />}/>
          <Route path="/02" />
          <Route path="/03" />
          <Route path="/04" />
          <Route path="/05" />
          <Route path="/06" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
