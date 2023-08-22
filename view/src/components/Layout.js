import React from 'react';
import { BrowserRouter as Router, Route ,Routes  } from 'react-router-dom';
import Home from '../pages/Home';
import Roadmap from './Roadmap';
import Markiting from '../pages/Markiting';

const Layout = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/markiting' element={<Markiting/>}/>
      <Route path='/roadmap' element={<Roadmap/>}/>
      {/* Add more routes here */}
    </Routes>
  </Router>
  );
};

export default Layout;