import './App.css'
import './i18n.ts'
import NavBar from './app/layout/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app/routes/AppRoutes.tsx';
import Footer from './app/layout/Footer.tsx';

function App() {
  return (
    <Router>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
    </Router>
  )
}

export default App
