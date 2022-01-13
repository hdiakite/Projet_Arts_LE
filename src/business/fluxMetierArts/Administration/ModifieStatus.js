import React from 'react';
import 'antd/dist/antd.css';
import { Menu, PageHeader } from 'antd';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'AjoutBase',
    breadcrumbName: 'Modififcation de statut',
  },
];

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
const ModifieStatus = () => {
  return (
    <>
      <div>
        <PageHeader
          className="site-page-header"
          title="Modifier le statut"
          breadcrumb={{ routes }}
        />
      </div>
      <div>{menuModifStatut}</div>
    </>
  );
};
export default ModifieStatus;
