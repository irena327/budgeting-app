import React, { Component } from "react";
import logo from './../../logo.png';
import "./NavigationBar.css";
import { Menu } from 'antd';

class LoginMenuBar extends Component {
  render() {
    return (
      <Menu mode="horizontal" className="style">
        <Menu.Item key="logo">
            <img
               src={logo}
               alt="logo"
               width="30"
               height="30"
               padding="2px"
            />
        </Menu.Item>
        <Menu.Item key="home">
          <a style={{ textDecoration: "none" }} href="/">Budget Tracker</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LoginMenuBar;