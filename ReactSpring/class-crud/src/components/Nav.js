import React from "react";
import "./nav.css";

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div id="cssmenu">
          <ul>
            <li>
              <a href="/">SpringBoot</a>
            </li>
            <li>
              <a href="/">React</a>
            </li>
            <li>
              <a href="/">Practice</a>
            </li>
            <li>
              <a href="/">Project</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
