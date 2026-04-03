import React from 'react'
import Homepage from './Page/Home/Homepage'
import './index.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Filtercategory from './Page/Filter/Filtercategory';







const App = () => {
  return (
    <div>
     
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage />} />
            <Route path="Filter" element={<Filtercategory />} />
          </Route>




        </Routes>
      </Router>

    </div>
  );
}

export default App