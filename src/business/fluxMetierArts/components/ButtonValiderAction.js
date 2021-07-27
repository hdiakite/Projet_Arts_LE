import React from 'react';
import './style.css';
import { Button } from 'antd';

function ButtonValiderAction(props) {
  return (
    <Button className="boutonValider" type="primary" htmlType="submit">
      {props.name}
    </Button>
  );
}
export default ButtonValiderAction;
