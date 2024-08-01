// Dashboard
import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import logo_v from './preview_version.png';
import './sign.css';
import './dashboard.css';
import cursor from './cursor.svg';
import binocular from './binocular.svg';
import box from './box.svg';
import settings from './settings.svg';
import folder_lock from './folder_lock.svg';
import folder_azuki from './azuki.png';
import protect from './protect.svg';
import bid_xs_1 from './bid_xs_1.png';
import bid_xs_2 from './bid_xs_2.png';
import ethereum from './ethereum.svg';
import change from './change.svg';


function Dashboard() {
  return (
    <div>
        <div class="dashboard">
           
      
            <div class="dashboard_container">
            <div class="dashboard_demo">
            <img src={logo}></img>
           <div class="demo_title">NFTinit Preview</div>
           <div class="demo_description">NFTinit Preview, Bidbar Preview 0.1</div>
           <div class="demo_description_x">NFTinit Preview is a beta app for NFTinit Desktop. Sign up for early access to beta features and more. Beta features may have stability issues, visit the details page for more information.</div>
            </div>
            <div class="bidbar_container">
                <div class="bidbar_item active"><img src={cursor}></img></div>
                <div class="bidbar_item"><img src={box}></img></div>
                <div class="bidbar_item bidbar_bid">
                    <div class="bidbar_bid avatar"><img src={folder_azuki}></img></div>
                    <div class="bidbar_bid_details">
                        <div class="bidbar_bid_title">
                            Azuki Ele...
                            <div class="bid_protect">
                                <img src={protect}></img> Protect
                            </div>
                        </div>
                        <div class="bidbar_bid_label">12/400 | Floor: 0.234</div>
                        <div class="bidbar_bid_bar">
                            <div class="bidbar_bid_bar_load"></div>
                        </div>
                 
                    </div>
                    <div class="bidbar_actions">
                        <div class="action_stop">Stop</div>
                        <div class="action_pause">Pause</div>
                    </div>
                   
                </div>

                <div class="bidbar_item bidbar_extra">
                    <div class="bidbar_extra_folder">
                        <img src={bid_xs_1}></img>
                        <img src={bid_xs_2}></img>
                    </div>
                    <div class="action_seeall">See All</div>
                </div>

                <div class="bidbar_item"><img src={binocular}></img></div>
                <div class="bidbar_item"><img src={settings}></img></div>
                <div class="bidbar_item"><img src={folder_lock}></img></div>

                <div class="bidbar_item bidbar_crypto">
                <div class=" bidbar_crypto_icon">
                        <img src={ethereum}></img>
                    </div>

                    <div class="bidbar_crypto_change">
                        <img src={change}></img>
                    </div> 
                    <div class="bidbar_crypto_details">
                        <div class="bidbar_crypto_label">ETH</div>
                        <div class="bidbar_crypto_price">$3.183,34</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
