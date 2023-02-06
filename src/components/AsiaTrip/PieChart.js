import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Spending by Location ($)",
  backgroundColor: '#efefef',
  fontName: 'Quicksand',
  fontSize: '14',
  pieHole: 0.3,
  is3D: false,
  colors: ['#b3c8d3', '#f0bbad', '#adae8f', '#cf8477', '#95c5df'],
};

const PieChart = ({ data }) => {
   // sum all purchases by location
   const map = new Map([["Tokyo", 0], ["Kyoto", 0], ["Seoul", 0], ["Jeju Island", 0],
                        ["Taipei", 0]]);
   for (let i = 0; i < data.length; i++) {
      map.set(data[i].Category, map.get(data[i].Category) + Number(data[i].Cost));
   }

   // create new array of data
   const displayData = [["Location", "Spending"]];
   for (let key of map.keys()) {
      displayData.push([key, map.get(key)]);
   }

   return (
      <Chart
         chartType="PieChart"
         width="100%"
         height="400px"
         data={displayData}
         options={options}
      />
  );
}

export default PieChart;
