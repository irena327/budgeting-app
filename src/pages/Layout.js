import React from "react";
import { Layout as Format} from 'antd';
import NavigationBar from "./../navigation/NavigationBar/NavigationBar";
import MenuBar from "./../navigation/NavigationBar/MenuBar";
import "./../App.css";

const { Header, Content, Footer } = Format;

const Layout = ({children}) => {
   return (
      <Format>
         <Header style={{ backgroundColor: '#b3c8d3', padding: '0px 50px' }}>
            <MenuBar />
         </Header>
         <Content style={{ backgroundColor: '#efefef', padding: '50px 50px' }}> 
            <div className="site-layout-content">
               { children }
            </div> 
         </Content>
         <Footer style={{ backgroundColor: '#efefef', textAlign: 'center', fontWeight: 'lighter', fontName: "Quicksand" }}>
            © Irena Lee 2022
         </Footer>
      </Format>
   )
 }

 export default Layout;