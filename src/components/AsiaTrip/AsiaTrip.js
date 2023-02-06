import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from 'antd';
import { useHistory } from "react-router-dom";
import ItemInput from "./ItemInput";
import PurchasesTable from "./PurchasesTable";
import { db, auth } from '../../firebase';
import "./../MonthlyTracking/MonthlyTracking.css";
import ByLocation from "./ByLocation";
import ByCategory from "./ByCategory";
import TotalSpending from "../TotalSpending/TotalSpending";
import daisy from './../../daisy.png'

function AsiaTrip() {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [userDataFetched, setUserDataFetched] = useState(false);
    const [data, setData] = useState([]);
    const dataFetchedRef = useRef(false);

    // fetches data from firestore at start
    const getData = () => {
        if (!userDataFetched) {
            return;
        }
        console.log("id: " + user.email);
        const id = user.email;
        db.collection("asia").where("id", "==", id).get()
        .then((querySnapshot) => {
           const newData = [];
           querySnapshot.forEach((doc) => {
                 newData.push(doc.data());
           });
           setData([...data, ...newData]);
        })
        .catch((error) => {
           console.log("Error getting documents: ", error);
        });
     }
    
    useEffect(() => {
         // get current user info
        auth.onAuthStateChanged(user2 => {
            if(user2) {
             setUser(user2);
             setUserDataFetched(true);
            }  else {
                history.push("/");
            }
        });
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
    },[]);

    useEffect(() => {
        getData();
    }, [user]);

    return (
        <div>
            <Row justify="center" align="middle" className="row">
                <Col span={2}>
                    <img
                        src={daisy}
                        alt="logo"
                        width="40"
                        height="40"
                    />
                </Col>
                <Col span={10}>
                    <h1 className="Header">
                        Asia Senior Trip 2023
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
            <Row justify="center" align="top">
                <Col span={12}>
                    <ItemInput data={ data } setData={ setData } user={ user }/>
                </Col>
                <Col span={12}>
                    <TotalSpending data={ data }/>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="rowPadding">
                <Col span={14}>
                    <ByCategory data={ data }/>
                </Col>
                <Col span={10}>
                    <ByLocation data={ data }/>
                </Col>
            </Row>
            <Row align="middle">
                <Col span={24}>
                    <PurchasesTable data={ data } setData={ setData } user={ user }/>
                </Col>
            </Row>
        </div>
    );
}

export default AsiaTrip;