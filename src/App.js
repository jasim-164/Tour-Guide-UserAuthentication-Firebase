
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Service from './components/Service/Service'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import NotFound from './components/NotFound/NotFound'; 
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'

import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
 
  const Page=()=>{
    console.log('Hello')
  }
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/service" element={<Service />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/checkout" element={
      
      <Checkout />
     
      
    }></Route>
    <Route path="*" element={<NotFound />}></Route>
    </Routes>
   
   <Footer/>
   
  
    </div>
  );
}

export default App;
