import React from 'react';
import "../css/home.css";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Platformbody from '../components/Platformbody';


const Home = () => {
  return ( 
    <div className="home-container">
      <Sidebar/>
      <div className="content">
        <Header/>
        {/* Other content for the main section of the page */}
        <Platformbody/>
      </div>
    </div>
  );
};

export default Home;