import React from 'react';
import './style.css';
import { Button } from 'antd';

function ButtonRejetAction(props) {
  return (
    <Button className="boutonRejet" type="primary" danger>
      {props.name}
    </Button>
  );
}
export default ButtonRejetAction;
