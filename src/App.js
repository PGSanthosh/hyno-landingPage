import './App.css';
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./Home";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
