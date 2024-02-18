import React, { useState, useEffect, useRef } from "react";
import { Chart } from "react-google-charts";
import { db, auth } from '../firebase';

const MonthlyOverview = ({ year }) => {
   const [user, setUser] = useState("");
   const [userDataFetched, setUserDataFetched] = useState(false);
   const [data, setData] = useState([]);
   const dataFetchedRef = useRef(false);

   const options = {
      title:`${year} Monthly Spending At-A-Glance`,
      // curveType: 'function',
      vAxis: {format: '$#,###.##'},
      legend: { position: 'right' },
      backgroundColor: '#efefef',
      fontName: 'Quicksand',
      fontSize: '14',
      is3D: false,
      colors: ['#ff470a', '#b3c8d3', '#f0bbad', '#adae8f', '#cf8477', '#95c5df', '#f6d060', '#7986CB', 
               '#cecef5', '#809bce', '#95b8d1', '#b8e0d2', '#e8d1c5', '#eac4d5'],
   };

   // fetches data from firestore
   const getData = () => {
      if (!userDataFetched) {
         return;
     }
      db.collection("purchase").where("id", "==", user.email).where("year", "==", year)
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
   }
   
   useEffect(() => {
      // get current user info
     auth.onAuthStateChanged(user2 => {
         if(user2) {
          setUser(user2);
          setUserDataFetched(true);
         } else {
          console.log("problem");
         }
     });
     if (dataFetchedRef.current) return;
         dataFetchedRef.current = true;
   },[]);

   useEffect(() => {
      getData();
   }, [user]);

   // create new array of data
   const displayData = [["Month", "Total", "Housing", "Groceries", "Dining", "Uber Eats", "Alcohol", "Drinks & Snacks", 
                           "Shopping", "Health & Beauty", "Entertainment", "Travel", "Transportation", "Significant Other", "Other"]];
   
   const months = new Map([["January", 0], ["February", 0], ["March", 0], ["April", 0], ["May", 0], ["June", 0], ["July", 0], 
                           ["August", 0], ["September", 0], ["October", 0], ["November", 0], ["December", 0]]);

   const map = new Map([["January", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["February", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["March", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["April", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["May", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["June", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["July", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["August", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["September", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["October", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["November", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])], 
                        ["December", new Map([["Housing", 0], ["Groceries", 0], ["Dining", 0], ["Uber Eats", 0], ["Alcohol", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Transportation", 0], ["Significant Other", 0], ["Other", 0]])]]);

   // parse through data once and update categories
   // for (let i = 0; i < data.length; i++) {
   //    const m = data[i].month;
   //    for (let category of data[i].Category) {
   //       map.get(m).set(category, map.get(m).get(category) + Number(data[i].Cost));
   //    }
   //    months.set(m, months.get(m) + Number(data[i].Cost));
   // }
   data.forEach(item => {
      const month = item.month;
      const cost = Number(item.Cost);
      months.set(month, months.get(month) + cost);
      item.Category.forEach(category => {
         if (!map.get(month).has(category)) {
            map.get(month).set(category, 0);
         }
         map.get(month).set(category, map.get(month).get(category) + cost);
      });
   });


   // build expenses for each month
   for (let month of months.keys()) {
      const arr = [month, months.get(month)];
      for (let key of map.get(month).keys()) {
         arr.push(map.get(month).get(key));
      }
      displayData.push(arr);
   }

   return (
      <Chart
         chartType="LineChart"
         width="98%"
         height="400px"
         data={displayData}
         options={options}
      />
   );
}

export default MonthlyOverview;
