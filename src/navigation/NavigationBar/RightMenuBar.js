import React, { Component } from 'react';
import { auth } from '../../firebase';
import { Menu } from 'antd';

const signOut = e => {
   auth.signOut().then(function() {
     console.log('Signout Succesfull')
     console.log("Signed out");
     localStorage.clear();
   }, function(error) {
     console.log('Signout Failed')  
   });
 }

class RightMenuBar extends Component {
  render() {
    return (
      <Menu mode="horizontal" className="style" style={{minWidth: '50px'}}>
        <Menu.Item key="signout">
          <a style={{ textDecoration: "none" }} href="/" onClick={ signOut } >Sign Out</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenuBar;