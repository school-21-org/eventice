import { useState } from 'react'
import logo from './logo.svg'
import { Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-600 text-white h-screen">
      <header className="w-1/2">
        <img src={logo} alt="logo" />
        <p>Hello Vite + React + React Router + Tailwind!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p className='text-3xl font-thin'>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link to="/about">Click me about</Link>
        </p>
      </header>
    </div>
  )
}

export default App
