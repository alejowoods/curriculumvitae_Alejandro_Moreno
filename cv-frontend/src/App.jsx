import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';  
import ResumeGerman from './components/ResumeGerman.jsx';
import ResumeEnglish from './components/ResumeEnglish.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/german">Lebenslauf (DE)</Link>
            </li>
            <li>
              <Link to="/english">Resume (EN)</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/german" element={<ResumeGerman />}></Route>
          <Route path="/english" element={<ResumeEnglish />}></Route>
        </Routes>
      </Router>
        <div>
        </div>
        <h1>Hola lindos/as... Estoy haciendo una hoja de vida para mis nuevos trabajos. Estoy triunfando</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
