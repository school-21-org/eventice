import { Calendar } from 'antd'
import { useState } from 'react'
import { Link } from "react-router-dom"
import EventCard from './EventCard'
import Header from './HeaderBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen max-w-7xl mx-auto flex flex-col">
      <Header />
      <main className='py-8 flex flex-col xl:flex-row gap-4'>
        <div className='xl:w-2/5'>
          <Calendar></Calendar>
        </div>
        <EventCard />
      </main>
      <p>
        <Link to="/about">Click me about</Link>
      </p>
      <div>
        <p className='mb-0'>School news</p>
      </div>
    </div>
  )
}

export default App
