import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from 'antd';
import { useHistory } from "react-router-dom";
import ItemInput from "./../ItemInput/ItemInput";
import PurchasesTable from "./../PurchasesTable/PurchasesTable";
import BudgetSetter from "./../BudgetSetter/BudgetSetter";
import firebase, { db, auth } from '../../firebase';
import "./MonthlyTracking.css";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import TotalSpending from "../TotalSpending/TotalSpending";
import daisy from './../../daisy.png'

function MonthlyTracking({ month, year }) {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [userDataFetched, setUserDataFetched] = useState(false);
    const [data, setData] = useState([]);
    const dataFetchedRef = useRef(false);
    const [budgets, setBudgets] = useState([3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]);

    // fetches data from firestore at start
    const getData = () => {
        if (!userDataFetched) {
            return;
        }
        console.log("id: " + user.email);
        const id = user.email;
        db.collection("purchase").where("id", "==", id).where("month", "==", month).where("year", "==", year)
        .get()
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

        // get budgets from firestore at start
        db.collection("budgets").where(firebase.firestore.FieldPath.documentId(), '==', id)
        .get()
        .then((querySnapshot) => {
           let newBudgets = null;
           querySnapshot.forEach((doc) => {
                newBudgets = doc.data();
           });
           setBudgets(newBudgets["newBudgets"]);
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
                <Col span={6}>
                    <h1 className="Header">
                        { month } { year }
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
                    <ItemInput month={ month } year={ year } data={ data } setData={ setData } user={ user }/>
                </Col>
                <Col span={12}>
                    <TotalSpending data={ data }/>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="rowPadding">
                <Col span={14}>
                    <BarChart data={ data } budgets={ budgets }/>
                </Col>
                <Col span={10}>
                    <BudgetSetter budgets={ budgets } setBudgets={ setBudgets }/>
                </Col>
                {/* <Col span={8}>
                    <PieChart data={ data }/>
                </Col> */}
            </Row>
            <Row align="middle">
                <Col span={24}>
                    <PurchasesTable data={ data } setData={ setData } user={ user }/>
                </Col>
            </Row>
        </div>
    );
}

export default MonthlyTracking;