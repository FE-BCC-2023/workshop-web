import { Route, Routes } from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
