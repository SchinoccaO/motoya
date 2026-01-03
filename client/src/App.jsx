import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TallerProfile from './pages/TallerProfile'
import RegistroTaller from './pages/RegistroTaller'
import ResenaForm from './pages/ResenaForm'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/taller" element={<TallerProfile />} />
      <Route path="/registro-taller" element={<RegistroTaller />} />
      <Route path="/resena" element={<ResenaForm />} />
    </Routes>
  )
}

export default App
