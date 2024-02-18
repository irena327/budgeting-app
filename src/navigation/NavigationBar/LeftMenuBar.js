import React, { Component } from 'react';
import { Menu } from 'antd';
import logo from './../../logo.png';
const SubMenu = Menu.SubMenu;

class LeftMenuBar extends Component {
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
          <a style={{ textDecoration: "none" }} href="/home">Home</a>
        </Menu.Item>
        {/* <SubMenu title={<span>2023</span>}>
        <Menu.Item key="jan23">
            <a style={{ textDecoration: "none" }} href="/2023/january">January</a>
         </Menu.Item>
         <Menu.Item key="feb23">
            <a style={{ textDecoration: "none" }} href="/2023/february">February</a> 
         </Menu.Item>
         <Menu.Item key="march23">
            <a style={{ textDecoration: "none" }} href="/2023/march">March</a> 
         </Menu.Item>
         <Menu.Item key="april23">
            <a style={{ textDecoration: "none" }} href="/2023/april">April</a> 
         </Menu.Item>
         <Menu.Item key="may23">
            <a style={{ textDecoration: "none" }} href="/2023/may">May</a> 
         </Menu.Item>
         <Menu.Item key="june23">
            <a style={{ textDecoration: "none" }} href="/2023/june">June</a> 
         </Menu.Item>
         <Menu.Item key="july23">
            <a style={{ textDecoration: "none" }} href="/2023/july">July</a> 
         </Menu.Item>
         <Menu.Item key="aug23">
            <a style={{ textDecoration: "none" }} href="/2023/august">August</a> 
         </Menu.Item>
         <Menu.Item key="sept23">
            <a style={{ textDecoration: "none" }} href="/2023/september">September</a> 
         </Menu.Item>
         <Menu.Item key="oct23">
            <a style={{ textDecoration: "none" }} href="/2023/october">October</a> 
         </Menu.Item>
         <Menu.Item key="nov23">
            <a style={{ textDecoration: "none" }} href="/2023/november">November</a> 
         </Menu.Item>
         <Menu.Item key="dec23">
            <a style={{ textDecoration: "none" }} href="/2023/december">December</a> 
         </Menu.Item>
        </SubMenu> */}
        <SubMenu title={<span>2024</span>}>
        <Menu.Item key="jan24">
            <a style={{ textDecoration: "none" }} href="/2024/january">January</a>
         </Menu.Item>
         <Menu.Item key="feb24">
            <a style={{ textDecoration: "none" }} href="/2024/february">February</a> 
         </Menu.Item>
         <Menu.Item key="march24">
            <a style={{ textDecoration: "none" }} href="/2024/march">March</a> 
         </Menu.Item>
         <Menu.Item key="april24">
            <a style={{ textDecoration: "none" }} href="/2024/april">April</a> 
         </Menu.Item>
         <Menu.Item key="may24">
            <a style={{ textDecoration: "none" }} href="/2024/may">May</a> 
         </Menu.Item>
         <Menu.Item key="june24">
            <a style={{ textDecoration: "none" }} href="/2024/june">June</a> 
         </Menu.Item>
         <Menu.Item key="july24">
            <a style={{ textDecoration: "none" }} href="/2024/july">July</a> 
         </Menu.Item>
         <Menu.Item key="aug24">
            <a style={{ textDecoration: "none" }} href="/2024/august">August</a> 
         </Menu.Item>
         <Menu.Item key="sept24">
            <a style={{ textDecoration: "none" }} href="/2024/september">September</a> 
         </Menu.Item>
         <Menu.Item key="oct24">
            <a style={{ textDecoration: "none" }} href="/2024/october">October</a> 
         </Menu.Item>
         <Menu.Item key="nov24">
            <a style={{ textDecoration: "none" }} href="/2024/november">November</a> 
         </Menu.Item>
         <Menu.Item key="dec24">
            <a style={{ textDecoration: "none" }} href="/2024/december">December</a> 
         </Menu.Item>
        </SubMenu>
        {/* <SubMenu title={<span>Travel</span>}>
         <Menu.Item key="asia">
            <a style={{ textDecoration: "none" }} href="/asiatrip">Asia Trip 2023</a>
         </Menu.Item>
        </SubMenu> */}
      </Menu>
    );
  }
}
export default LeftMenuBar;