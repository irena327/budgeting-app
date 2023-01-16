import React from "react";
import { Chart } from "react-google-charts";

export const options = {
   title: "Budget Tracker",
   vAxis: {format: '$#,###.##'},
   backgroundColor: '#efefef',
   fontName: 'Quicksand',
   fontSize: '14',
   colors: ['#efefef'],
   legend:'top',
 };

const BarChart = ({ data, budgets }) => {
   const colors = ['#b3c8d3', '#f0bbad', '#adae8f', '#cf8477', '#95c5df', '#f6d060', '#7986CB', '#cecef5'];
   const ranges = ['#adae8f', '#e9cb72', '#cf8477', '#bd4646'];
   // sum all purchases by category
   const map = new Map([["Groceries", 0], ["Dining", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Other", 0]]);
   for (let i = 0; i < data.length; i++) {
      map.set(data[i].Category, map.get(data[i].Category) + Number(data[i].Cost));
   }

   // create new array of data
   const displayData = [["Category", "0-50% = Green, 51-75% = Yellow, 76-100% = Pink, >100% = Red", { role: "style" }]];
   let i = 0;
   for (let key of map.keys()) {
      const row = [key, map.get(key)];
      if (map.get(key) < (budgets[i] / 2)) {
         row.push(ranges[0]);
      } else if (map.get(key) < (budgets[i] / 4 * 3)) {
         row.push(ranges[1]);
      } else if (map.get(key) < budgets[i]) {
         row.push(ranges[2]);
      } else {
         row.push(ranges[3]);
      }
      displayData.push(row);
      i++;
   }

   return (
      <Chart
         chartType="ColumnChart"
         width="100%"
         height="400px"
         data={displayData}
         options={options}
      />
  );
}

export default BarChart;
