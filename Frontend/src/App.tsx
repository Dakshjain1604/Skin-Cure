import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import HomePage from './Pages/Home';

function App() {


  return (

     <BrowserRouter>
     
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

     </BrowserRouter>
  )
}

export default App
