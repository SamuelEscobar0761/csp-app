import './App.css'
import './i18n.ts'
import NavBar from './app/layout/NavBar'
import { HomePage } from './app/pages/HomePage.tsx'

function App() {
  return (
    <>
      <NavBar/>
      <HomePage/>
    </>
  )
}

export default App
