import {Routes, Route} from 'react-router-dom';
import HomePage from "./routes/home/home";
import Navbar from "./routes/navbar/navbar";
import Authentication from './routes/authentication/authentication'

import "./App.css";

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navbar/>}>
      <Route index element={<HomePage/>}/>
      <Route path='shop' element={<h1>I am the shopping page</h1>}/>
      <Route path='cart' element={<h1>I am the empty cart page</h1>}/>
      <Route path='auth' element={<Authentication />}/>

    </Route>
  </Routes>
  )
};

export default App;
