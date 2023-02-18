import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthContext from './components/context/AuthContext'

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'

// routes
import PrivateRoute from "./components/routes/PrivateRoute";
import AuthRoute from "./components/routes/AuthRoute";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
          </Route >
          <Route element={<AuthRoute />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </AuthContext>
    </div>
  )
}

export default App
