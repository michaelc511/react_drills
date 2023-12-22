import { useState } from 'react'

// Drills
 
// 3. Conditional Rendering
import UserGreeting from './drills/render/UserGreeting'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserGreeting isLoggedIn={true} userName="Mike" />
    </>
  )
}

export default App
