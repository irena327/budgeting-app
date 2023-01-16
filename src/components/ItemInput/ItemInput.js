import React, { useEffect, useState }  from 'react';
import { db } from '../../firebase';
import { Button, Form, Input, Select } from 'antd';
import { auth } from './../../firebase';
import "./ItemInput.css";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset:7,
    span: 16,
  },
};

const ItemInput = ({ month, year, data, setData, user }) => {
  const [form] = Form.useForm();
  const onCategoryChange = (value) => {
    switch (value) {
      case 'Groceries':
        form.setFieldsValue({
          note: 'Grocery Purchase',
        });
        return;
      case 'Dining':
        form.setFieldsValue({
          note: 'Dining Purchase',
        });
        return;
      case 'Drinks & Snacks':
        form.setFieldsValue({
          note: 'Drinks and Snacks Purchase',
        });
        return;
      case 'Shopping':
        form.setFieldsValue({
          note: 'Shopping Purchase',
        });
        return;
      case 'Health & Beauty':
        form.setFieldsValue({
          note: 'Health and Beauty Purchase',
        });
        return;
      case 'Entertainment':
        form.setFieldsValue({
          note: 'Entertainment Purchase',
        });
        return;
      case 'Travel':
        form.setFieldsValue({
          note: 'Travel Purchase',
        });
        return;
      case 'Other':
        form.setFieldsValue({
          note: 'Other Purchase',
        });
        break;
      default:
    }
  };

  // updates state and retrivies data from firestore
  const onFinish = (values) => {
    const date = new Date().toISOString();
    const id = user.email;
    console.log("id: " + id);
    const newValues = {...values, month, year, date, id};
    db.collection("purchase").add(newValues);
    setData([...data, newValues]);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Item"
        label="Item"
        rules={[
          {
            required: true,
            message: "Purchase Item must be listed",
          },
        ]}
      >
        <Input placeholder="ex: H-E-B"/>
      </Form.Item>
      <Form.Item
        name="Cost"
        label="Cost ($)"
        rules={[
          {
            pattern: new RegExp(/^\d+\.{0,1}\d{0,2}$/),
            required: true,
            message: "Cost must be entered as a number",
          },
        ]}
      >
        <Input placeholder="ex: 10 or 10.00"/>
      </Form.Item>
      <Form.Item
        name="Category"
        label="Category"
        rules={[
          {
            required: true,
            message: "Category must be selected",
          },
        ]}
      >
        <Select
          placeholder="Select a category"
          onChange={onCategoryChange}
          allowClear
        >
          <Option value="Groceries">Groceries</Option>
          <Option value="Dining">Dining</Option>
          <Option value="Drinks & Snacks">Drinks & Snacks</Option>
          <Option value="Shopping">Shopping</Option>
          <Option value="Health & Beauty">Health & Beauty</Option>
          <Option value="Entertainment">Entertainment</Option>
          <Option value="Travel">Travel</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ItemInput;