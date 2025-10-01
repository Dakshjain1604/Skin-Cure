import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import HomePage from './Pages/Home';
import DashBoard from './Pages/DashBoard';

function App() {


  return (

     <BrowserRouter>
     
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes>

     </BrowserRouter>
  )
}

export default App
