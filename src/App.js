
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'

import Header from './components/Header/Header'
import Service from './components/Service/Service'
import About from './components/About/About'
import Blog from './components/Blog/Blog'

function App() {
  console.log('hello')
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/service" element={<Service />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/about" element={<About />}></Route>
   
    </Routes>
  
    </div>
  );
}

export default App;
