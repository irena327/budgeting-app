import React from "react";
import { Table } from "antd";
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { db } from '../../firebase';
import "./PurchasesTable.css";

const PurchasesTable = ({ data, setData, user }) => {
   const columns = [
      {
         title: "Purchase",
         dataIndex: "Item",
         key: "Item",
         width: "25%",
      },
      {
         title: "Cost ($)",
         dataIndex: "Cost",
         key: "Cost",
         render: (text) => "$" + parseFloat(text).toFixed(2),
         width: "25%",
      },
      {
         title: "Category",
         dataIndex: "Category",
         key: "Category",
         render: categories => (
            <span>{categories.join(", ")}</span>
          ),
         filters: [
            {
               text: 'Housing',
               value: 'Housing',
            },
            {
               text: 'Groceries',
               value: 'Groceries',
            },
            {
               text: 'Dining',
               value: 'Dining',
            },
            {
               text: 'Uber Eats',
               value: 'Uber Eats',
            },
            {
               text: 'Alcohol',
               value: 'Alcohol',
            },
            {
               text: 'Drinks & Snacks',
               value: 'Drinks & Snacks',
            },
            {
               text: 'Shopping',
               value: 'Shopping',
            },
            {
               text: 'Health & Beauty',
               value: 'Health & Beauty',
            },
            {
               text: 'Entertainment',
               value: 'Entertainment',
            },
            {
               text: 'Travel',
               value: 'Travel',
            },
            {
               text: 'Transportation',
               value: 'Transportation',
            },
            {
               text: 'Significant Other',
               value: 'Significant Other',
            },
            {
               text: 'Other',
               value: 'Other',
            },
         ],
         onFilter: (value, record) => record.Category.includes(value),
         filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
         width: "25%",
      },
      {
         title: "Date",
         dataIndex: "date",
         key: "date",
         defaultSortOrder: 'descend',
         sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
         width: "25%",
      },
      {
         title: "Actions",
         dataIndex: "action",
         key: "action",
         render: (text, record) => (
            <Button onClick={(e) => { onDelete(record.date, e); }}>
               <div>
                  <DeleteOutlined /> {" "}
                  Delete
               </div>
            </Button>
         ),
      },
   ];

   const onDelete = (date, e) => {
      e.preventDefault();
      const newData = data.filter(item => item.date !== date);
      setData(newData);
      var deleteItem = db.collection('purchase').where('date', '==', date);
      deleteItem.get().then(function (querySnapshot) {
         querySnapshot.forEach(function (doc) {
            doc.ref.delete();
         });
      });
   }


   const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
   };

   return (
      <Table dataSource={data} columns={columns} onChange={onChange} />
   );
};

export default PurchasesTable;