import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Preview from './Preview';
import Sign from './sign';
import Page2 from './Page2';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



/* 

 <div className="App">
      <img id="logo" src={logo} alt="logo"/>
      <h1>Join Waitlist for NFTinit Preview</h1>
      <p>This app contains the latest experimental versions developed for NFTinit Desktop Beta. Please review the usage agreement and possible possibilities while using it.</p>
      <input class="waitlist-ok" type="button" value="Sign in to Join Waitlist"></input>
      
    </div>

*/