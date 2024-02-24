import { useState } from 'react'
import './App.css'
import LayoutMain from './shared/ui/layout-main/layout-main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LayoutMain></LayoutMain>
    </>
  )
}

export default App
