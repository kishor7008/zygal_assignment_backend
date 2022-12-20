import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './component/Page';
function App() {
  return (
    <>
    {/* <Login/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/page" element={<Page/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
