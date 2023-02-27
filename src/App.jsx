import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthRoute from './components/routes/AuthRoute'
import ProtectedRoute from './components/routes/ProtectedRoute'

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<AuthRoute/>}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
