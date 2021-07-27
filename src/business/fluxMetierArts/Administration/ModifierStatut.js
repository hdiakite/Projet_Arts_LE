import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CheminModifStatut from './CheminModifStatut';

const menuModifStatut = (
  <>
    <Menu
      style={{ width: 256 }}
      mode="vertical"
      theme="light"
      defaultOpenKeys={['sub1']}
    >
      <Menu.Item key="1">
        <Link to="/Administration/ModifierStatut">Statut demand essai </Link>
      </Menu.Item>
      <Menu.Item key="2">Banc</Menu.Item>
    </Menu>
  </>
);
const ModifierStatut = () => {
  return (
    <div>
      <CheminModifStatut />
      {menuModifStatut}
    </div>
  );
};
export default ModifierStatut;
