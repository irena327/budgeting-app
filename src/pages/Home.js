import React, { useEffect, useState } from "react";
import { Col, Row } from 'antd';
import GIF from "./../budget-money.gif"
import "./Style.css"
import MonthlyOverview from "../components/MonthlyOverview";
import { useHistory } from "react-router-dom";
import { auth } from './../firebase';

function Home() {
    const history = useHistory();
    
    // get current user info
    const [user, setUser] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged(user2 => {
           if(user2) {
            setUser(user2);
           } else {
            history.push("/");
           }
        });
     }, []);

    return (
        <div>
            <Row justify="center" align="middle">
                <Col span={8}>
                    <div className="Intro">
                        Welcome, { user.displayName }!
                    </div>
                </Col>
                <Col span={8} offset={1}>
                    <img src={GIF} alt="loading..." className="image"/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <MonthlyOverview />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <MonthlyOverview />
                </Col>
            </Row>
        </div>
    );
}

export default Home;
