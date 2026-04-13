import React from 'react'
import Homepage from './Page/Home/Homepage'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Filtercategory from './Page/Filter/Filtercategory';
import Detailcart from './components/Detailcart/Detailcart';
import Clothes2 from './components/Clothes2/Clothes2';
import Dashboard from './admin/Dashboard/Dashboard';
import Cartpage from './Page/Cart/Cartpage';








const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='Filter' element={<Filtercategory />} />
            <Route path='Cart' element={<Cartpage />} />
            <Route path='product/:id' element={<Detailcart />} />
            <Route path='product/:id' element={<Clothes2 />} />


          </Route>

          <Route path='admin' element={<Dashboard/>} />



        </Routes>
      </Router>

    </div>
  );
}

export default App