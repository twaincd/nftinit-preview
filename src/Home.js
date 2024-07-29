// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Preview from './Preview.js'

function Home() {
  return (


<div className="App">
    
    <label>Early Access  25 January 2025</label>
<img id="logo" src={logo} alt="logo"/>
<h1>Join Waitlist for NFTinit Preview</h1>
<p>This app contains the latest experimental versions developed for NFTinit Desktop Beta. Please review the usage agreement and possible possibilities while using it.</p>
<Link style={{ textDecoration: 'none' }} to="/preview">
<input class="waitlist-ok" type="button" value="Sign in to Join Waitlist" to="/page1"></input>
</Link>

</div>
  );
}

export default Home;

/* 

    <div>
       <h1>Home Page</h1>
      <Link to="/page1">
        <button>Go to Page 1</button>
      </Link>
      <Link to="/page2">
        <button>Go to Page 2</button>
      </Link>
    </div> 
*/