import {Routes, Route} from 'react-router-dom';
import HomePage from "./routes/home/home";
import Navbar from "./routes/navbar/navbar";
import Authentication from './routes/authentication/authentication'
import Shop from './routes/shop/shop'

import "./App.css";

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navbar />}>
      <Route index element={<HomePage />}/>
      <Route path='shop' element={<Shop />}/>
      {/* <Route path='cart' element={<h1>I am the empty cart page</h1>}/> */}
      <Route path='auth' element={<Authentication />}/>

    </Route>
  </Routes>
  )
};

export default App;
