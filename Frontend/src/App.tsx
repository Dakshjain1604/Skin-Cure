import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import HomePage from './Pages/Home';

function App() {


  return (
    <div className='z-20'>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
