import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/loginpage/Login';
import SignUpPage from './pages/signUpPage/SignUpPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUpPage/>}/>
    </Routes>
   </BrowserRouter>
     
   
  );
}

export default App;
