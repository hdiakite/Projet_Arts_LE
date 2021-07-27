import React from 'react';
import './style.css';
import { Form, Input } from 'antd';

const layout = {
  wrapperCol: { span: 3 },
};

function FormImput(props) {
  return (
    <Form {...layout} layout="vertical">
      <Form.Item
        name="formimput"
        label={props.name}
        rules={[{ required: true }]}
      >
        <Input placeholder={'input placeholder'} />
      </Form.Item>
    </Form>
  );
}
export default FormImput;
