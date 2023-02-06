import React from 'react';
import { db } from '../../firebase';
import { Button, Form, Input, Select } from 'antd';
import "./../ItemInput/ItemInput.css";

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

const ItemInput = ({ data, setData, user }) => {
  const [form] = Form.useForm();

  const onCategoryChange = (value) => {
    switch (value) {
      case 'Food & Drinks':
        form.setFieldsValue({
          note: 'Food & Drinks',
        });
        return;
      case 'Gifts':
        form.setFieldsValue({
          note: 'Gifts',
        });
        return;
      case 'Attractions':
        form.setFieldsValue({
          note: 'Attractions',
        });
        return;
      case 'Transportation':
        form.setFieldsValue({
          note: 'Transportation',
        });
        return;
      case 'Hotels':
        form.setFieldsValue({
          note: 'Hotels',
        });
        return;
      case 'Flights':
        form.setFieldsValue({
          note: 'Flights',
        });
        return;
      case 'Other':
        form.setFieldsValue({
          note: 'Other',
        });
        break;
      default:
    }
  };

  const onLocationChange = (value) => {
    switch (value) {
      case 'Tokyo':
        form.setFieldsValue({
          note: 'Tokyo',
        });
        return;
      case 'Kyoto':
        form.setFieldsValue({
          note: 'Kyoto',
        });
        return;
      case 'Seoul':
        form.setFieldsValue({
          note: 'Seoul',
        });
        return;
      case 'Jeju Island':
        form.setFieldsValue({
          note: 'Jeju',
        });
        return;
      case 'Taipei':
        form.setFieldsValue({
          note: 'Taipei',
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
    const newValues = {...values, date, id};
    db.collection("asia").add(newValues);
    setData([...data, newValues]);
    console.log(values);
    form.resetFields();
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
        <Input placeholder="ex: Flights"/>
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
          <Option value="Food & Drinks">Food & Drinks</Option>
          <Option value="Gifts">Gifts</Option>
          <Option value="Attractions">Attractions</Option>
          <Option value="Transportation">Transportation</Option>
          <Option value="Hotels">Hotels</Option>
          <Option value="Flights">Flights</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="City"
        label="City"
        rules={[
          {
            required: true,
            message: "City must be selected",
          },
        ]}
      >
        <Select
          placeholder="Select a city"
          onChange={onLocationChange}
          allowClear
        >
          <Option value="Tokyo">Tokyo, Japan</Option>
          <Option value="Kyoto">Kyoto, Japan</Option>
          <Option value="Seoul">Seoul, Korea</Option>
          <Option value="Jeju Island">Jeju Island, Korea</Option>
          <Option value="Taipei">Taipei, Taiwan</Option>
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