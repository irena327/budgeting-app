import React from "react";
import { Table } from "antd";
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { db } from '../../firebase';
import "./../PurchasesTable/PurchasesTable.css";

const PurchasesTable = ({ data, setData, user }) => {
   const columns = [
      {
         title: "Purchase",
         dataIndex: "Item",
         key: "Item",
         width: "20%",
      },
      {
         title: "Cost ($)",
         dataIndex: "Cost",
         key: "Cost",
         render: (text) => "$" + parseFloat(text).toFixed(2),
         width: "20%",
      },
      {
         title: "Category",
         dataIndex: "Category",
         key: "Category",
         filters: [
            {
               text: 'Food & Drinks',
               value: 'Food & Drinks',
            },
            {
               text: 'Gifts',
               value: 'Gifts',
            },
            {
               text: 'Attractions',
               value: 'Attractions',
            },
            {
               text: 'Transportation',
               value: 'Transportation',
            },
            {
               text: 'Hotels',
               value: 'Hotels',
            },
            {
               text: 'Flights',
               value: 'Flights',
            },
            {
               text: 'Other',
               value: 'Other',
            },
         ],
         onFilter: (value, record) => record.Category.indexOf(value) === 0,
         filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
         width: "20%",
      },
      {
         title: "City",
         dataIndex: "City",
         key: "City",
         filters: [
            {
               text: 'Tokyo',
               value: 'Tokyo',
            },
            {
               text: 'Kyoto',
               value: 'Kyoto',
            },
            {
               text: 'Seoul',
               value: 'Seoul',
            },
            {
               text: 'Jeju Island',
               value: 'Jeju Island',
            },
            {
               text: 'Taipei',
               value: 'Taipei',
            },
         ],
         onFilter: (value, record) => record.City.indexOf(value) === 0,
         filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
         width: "20%",
      },
      {
         title: "Date",
         dataIndex: "date",
         key: "date",
         defaultSortOrder: 'descend',
         sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
         width: "20%",
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
      var deleteItem = db.collection('asia').where('date', '==', date);
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