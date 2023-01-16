import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Spending by Category ($)",
  backgroundColor: '#efefef',
  fontName: 'Quicksand',
  fontSize: '14',
  pieHole: 0.3,
  is3D: false,
  colors: ['#b3c8d3', '#f0bbad', '#adae8f', '#cf8477', '#95c5df', '#f6d060', '#7986CB', '#cecef5'],
};

const PieChart = ({ data }) => {
   // sum all purchases by category
   const map = new Map([["Groceries", 0], ["Dining", 0], ["Drinks & Snacks", 0], ["Shopping", 0],
                        ["Health & Beauty", 0], ["Entertainment", 0], ["Travel", 0], ["Other", 0]]);
   for (let i = 0; i < data.length; i++) {
      map.set(data[i].Category, map.get(data[i].Category) + Number(data[i].Cost));
   }

   // create new array of data
   const displayData = [["Category", "Spending"]];
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
