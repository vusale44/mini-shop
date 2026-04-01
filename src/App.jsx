import React from 'react'
import Homepage from './Page/Home/Homepage'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';






const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage />} />
  

          </Route>




        </Routes>
      </Router>
    </div>
  );
}

export default App