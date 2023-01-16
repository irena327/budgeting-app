import React from "react";
import "./TotalSpending.css";

const TotalSpending = ({ data }) => {
   var total = 0;
   for (let i = 0; i < data.length; i++) {
      total += Number(data[i].Cost);
   }
   total = total.toFixed(2);

   return (
      <div>
         <h2 className="header">
            Total Spending: 
         </h2>
         <h2 className="amount">
            ${ total }
         </h2>
      </div>
   );
}

export default TotalSpending;
