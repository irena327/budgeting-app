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

const BarChart = ({ data }) => {
   const colors = ['#f0bbad', '#cecef5', '#adae8f', '#cf8477', '#7986CB'];
   // sum all purchases by location
   const map = new Map([["Tokyo", 0], ["Kyoto", 0], ["Seoul", 0], ["Jeju Island", 0],
                        ["Taipei", 0]]);
   for (let i = 0; i < data.length; i++) {
      map.set(data[i].Category, map.get(data[i].Category) + Number(data[i].Cost));
   }

   // create new array of data
   const displayData = [["Location", "", { role: "style" }]];
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

export default BarChart;
