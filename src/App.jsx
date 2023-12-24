import { useState } from 'react'

// Drills
import Button from './drills/events/Button'
import ProfilePicture from './drills/events/ProfilePicture'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      Please read README.md for more details.

      <ol>
        <li>Props </li>
        <li>Components  </li>
        <li>Conditional Rendering  </li>
        <li>Events</li>
        <Button></Button>
        <ProfilePicture/>
        <li>Looping through arrays</li>
        <li>State management</li>
        <li>Mini Project</li>
      </ol>


    </>
  )
}

export default App
