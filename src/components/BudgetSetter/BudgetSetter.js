import React, { useState, useEffect } from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';
import { db, auth } from '../../firebase';
import "./BudgetSetter.css";

const DecimalStep = ({ budgets, setBudgets, index }) => {
   const [user, setUser] = useState("");
   useEffect(() => {
      // get current user info
     auth.onAuthStateChanged(user2 => {
         if(user2) {
          setUser(user2);
         } else {
          console.log("problem");
         }
     });
   },[]);

  const val = budgets[index];
  // updates state and firestore whenever input is changed
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    const newBudgets = budgets.map((c, i) => {
      if (i === index) {
        return value;
      } else {
        return c;
      }
    });
    const newValues = {newBudgets};
    console.log("email doc: " + user.email);
    db.collection("budgets").doc(user.email).set(newValues, {merge: true});
    setBudgets(newBudgets);
  };

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={3000}
          onChange={onChange}
          value={typeof val === 'number' ? val : 0}
          step={0.01}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={3000}
          style={{
            margin: '0 16px',
          }}
          step={0.01}
          value={val}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

const BudgetSetter = ({ budgets, setBudgets, email }) => {
   let total = 0;
   for (let i = 0; i < budgets.length; i++) {
      // Skip tracking uber eats and significant other in total budget because they are csubsets of other categories
      if (i !== 3 && i !== 11) {
         total += budgets[i];
      }
   }
   total = total.toFixed(2);

   return (
      <div>
         <Row justify="center" align="middle">
            <Col span={24}>
               <h2 className="title">
                  Budget Limits:
               </h2>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Housing:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 0 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Groceries:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 1 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Dining:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 2 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  **Uber Eats:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 3 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Alcohol:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 4 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Drinks & Snacks:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 5 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Shopping:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 6 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Health & Beauty:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 7 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Entertainment:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 8 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Travel:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 9 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Transportation:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 10 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  **Signficant Other:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 11 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <Col span={6}>
               <h2 className="category">
                  Other:
               </h2>
            </Col>
            <Col span={12}>
               <DecimalStep budgets={ budgets } setBudgets={ setBudgets } index={ 12 } email={ email }/>
            </Col>
         </Row>
         <Row justify="center" align="middle">
            <div className="total">
               Total Monthly Budget: ${ total }
            </div>
            <div>
               ** categories are not counted towards total monthly budget
            </div>
         </Row>
      </div>
   );
}
export default BudgetSetter;