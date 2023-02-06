import React from "react";
import { Chart } from "react-google-charts";

export const options = {
   title: "Spending by Category ($)",
   vAxis: {format: '$#,###.##'},
   backgroundColor: '#efefef',
   fontName: 'Quicksand',
   fontSize: '14',
   colors: ['#efefef'],
   legend:'top',
 };

const ByCategory = ({ data }) => {
   const colors = ['#e9ccb1', '#d3c4be', '#e4dac2', '#f4eee1', '#c4bdac', '#ebcfc4', '#e8e6d9'];
   // sum all purchases by location
   const map = new Map([["Food & Drinks", 0], ["Gifts", 0], ["Attractions", 0], ["Transportation", 0],
                        ["Hotels", 0], ["Flights", 0], ["Other", 0]]);
   for (let i = 0; i < data.length; i++) {
      map.set(data[i].Category, map.get(data[i].Category) + Number(data[i].Cost));
   }

   // create new array of data
   const displayData = [["Category", "", { role: "style" }]];
   let i = 0;
   for (let key of map.keys()) {
      const row = [key, map.get(key), colors[i]];
      i++;
      displayData.push(row);
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

export default ByCategory;
