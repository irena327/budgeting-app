import React, { useEffect } from "react";
import { Layout as Format, Button} from 'antd';
import { signInWithGoogle } from '../../firebase';
import LoginNavigationBar from "./../../navigation/NavigationBar/LoginMenuBar"
import { auth } from './../../firebase';
import { Col, Row } from 'antd';
import daisy from './../../daisy.png'
import "./Login.css";
import { useHistory } from "react-router-dom";

const { Header, Content, Footer } = Format;

function Login({ user, setUser }) { 
   const history = useHistory();

   useEffect(() => {
      auth.onAuthStateChanged(user2 => {
         setUser(user2);
         if(user2) {
            console.log(user2);
            history.push("/home");
         }
      });
   });

   console.log(user);

  return (
   <Format>
      <Header style={{ backgroundColor: '#b3c8d3', padding: '0px 50px' }}>
      <LoginNavigationBar />
      </Header>
      <Content style={{ backgroundColor: '#efefef', padding: '50px 50px' }}> 
         <div className="site-layout-content">
            <Row justify="center" align="middle" className="row">
                <Col span={2}>
                    <img
                        src={daisy}
                        alt="logo"
                        width="40"
                        height="40"
                    />
                </Col>
                <Col span={6}>
                    <h1 className="Header">
                        Budget Tracker
                    </h1>
                </Col>
                <Col span={2}>
                    <img
                        src={daisy}
                        alt="logo"
                        width="40"
                        height="40"
                    />
                </Col>
            </Row>
            <Row justify="center" align="middle" >
               <Col span={10} className="LoginForm">
                  <p>
                     Welcome, please sign in :)
                  </p>
                  {/* <LoginForm /> */}
                  <Button type="primary"
                     size="large"
                     onClick={ signInWithGoogle }>
                        Sign in with Google
                  </Button>
               </Col>
            </Row>
         </div> 
      </Content>
      <Footer style={{ backgroundColor: '#efefef', textAlign: 'center', fontWeight: 'lighter', fontName: "Quicksand" }}>
         © Irena Lee 2022
      </Footer>
   </Format>
  );
}

export default Login;
