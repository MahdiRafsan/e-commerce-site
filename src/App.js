import {Routes, Route} from 'react-router-dom';
import HomePage from "./routes/home/home";
import Navbar from "./routes/navbar/navbar";
import SignIn from './routes/sign-in/sign-in'

import "./App.css";

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navbar/>}>
      <Route index element={<HomePage/>}/>
      <Route path='shop' element={<h1>I am the shopping page</h1>}/>
      <Route path='cart' element={<h1>I am the empty cart page</h1>}/>
      <Route path='sign-in' element={<SignIn />}/>

    </Route>
  </Routes>
  )
};

export default App;
