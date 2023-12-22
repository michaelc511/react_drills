import { useState } from 'react'

// Drills

// 1. Props
import  {Props, Parent}  from './drills/props/Props'

// 2. Components
import Header from "./drills/components/Header"
import Footer from "./drills/components/Footer"
import Food from "./drills/components/Food"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Props Drill*/}
      {/* <Parent/>  */}

      {/* Components Drill */}
      <Header/>
      <Food/>
      <Footer/>
     
    </>
  )
}

export default App
