// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import Preview from './Preview.js'

function Home() {
  return (


<div className="App no-scroll">
    

<img id="logo" src={logo} alt="logo"/>
<label>Early Access  25 January 2025</label>
<h1>Join Waitlist for NFTinit Preview</h1>
<p>NFTinit Preview is a beta app for NFTinit Desktop. Sign up for early access to beta features and more. Beta features may have stability issues, visit the details page for more information.</p>

<Link style={{ textDecoration: 'none' }} to="/sign">
<input class="waitlist-ok" type="button" value="Sign in to Join Waitlist" to="/sign"></input>
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