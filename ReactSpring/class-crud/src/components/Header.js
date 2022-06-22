import React from "react";
import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="facebookBtn" className="snsLink">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <div />
          </a>
        </div>
        <div id="instaBtn" className="snsLink">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <div />
          </a>
        </div>
        <div id="menuBtn" className="Rmenu"></div>
        <div id="alertBtn" className="Rmenu">
          <div id="alertCount">0</div>
        </div>
        <div id="logoutBtn" className="Rmenu"></div>
        <div id="logo-wrap">
          <div id="logo">
            <a href="/">
              <div>SpringBoot_React Example</div>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
