import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Spending by City ($)",
  backgroundColor: '#efefef',
  fontName: 'Quicksand',
  fontSize: '14',
  pieHole: 0.3,
  is3D: false,
  colors: ['#7e9680', '#79616f', '#ae6378', '#d87f81', '#eab595'],
};

const ByLocation = ({ data }) => {
   // sum all purchases by location
   const map = new Map([["Tokyo", 0], ["Kyoto", 0], ["Seoul", 0], ["Jeju Island", 0],
                        ["Taipei", 0]]);
   for (let i = 0; i < data.length; i++) {
      map.set(data[i].City, map.get(data[i].City) + Number(data[i].Cost));
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

export default ByLocation;
