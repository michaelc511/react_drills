import { useState } from 'react'
import  {Props, Parent}  from './drills/props/Props'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parent></Parent>
    </>
  )
}

export default App
