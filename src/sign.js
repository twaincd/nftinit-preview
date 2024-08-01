// sign 
import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import logo_v from './preview_version.png';
import './sign.css';

function sign() {
  return (
    <div class="sign">

<div class="init_notification">
      <div class="init_notification_out">
        <div class="waitlist_notification">
          We can't waitlist you right now, try again in a few days.
        </div>
        
      </div>
    </div>

          <div class="sign_container">
      <div class="nft-col-2 init_order_1">
          <div class="sign_form">
          <h3 class="sign_form_title">Sign in</h3>
          <label class="sign_form_label">Username</label>
          <input class="sign_form_input" type="text" name="Username" placeholder="Username" id="test"></input>
          <label class="sign_form_label">Password</label>
          <input class="sign_form_input" type="password" name="Username" placeholder="Password" id="test"></input>
          <Link style={{ textDecoration: 'none', color: '#666666', width: '100%'}} to="/dashboard">
          <input class="sign_form_button" type="button" value="Sign in" ></input>
          </Link>
          <Link style={{ textDecoration: 'none', color: '#666666'}} to="/">
            <div class="back_button">Back</div>
          </Link>
          </div>
      </div>
      <div class="nft-col-2 init_order_2">
          <div class="sign_adverse">
            <div class="sign_adverse_container">
              <img class="sign_adverse_logo" src={logo} alt="logo"/>
              <h1 class="sign_adverse_title">Welcome <br></br> NFTinit Preview</h1>
              <p class="sign_adverse_desc">NFTinit Preview is a beta app for NFTinit Desktop. Sign up for early access to beta features and more. Beta features may have stability issues, visit the details page for more information.</p>
              <div class="init_version_component">
                <div class="test">
                  <img class="init_version_logo" src={logo_v} alt="logo"/>
                  </div>
                <div class="test">
                  <div class="init_version_component_text">
                  <div class="init_version_c_label">NFTinit Beta (MacOS Apple M1)</div>
                  <div class="init_version_c_p">Current Version 0.3.2.001</div>
                  </div>
              
                </div> 
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default sign;
