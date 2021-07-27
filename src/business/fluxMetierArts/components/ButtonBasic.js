import React from 'react';
import './style.css';
import { Button } from 'antd';

function ButtonBasic(props) {
  return <Button className="boutonBasic">{props.name}</Button>;
}
export default ButtonBasic;
