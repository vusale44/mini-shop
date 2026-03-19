import React from 'react'
import Homepage from './Page/Home/Homepage'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Categorypage from './Page/Category/Categorypage';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Categorypage />} />
      </Routes>
    </Router>


    </div>
  )
}

export default App