import React from 'react';
import './../components/style.css';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'AjoutBase',
    breadcrumbName: 'Attribution de rôle',
  },
];

const CheminAttribuerRole = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Attribuer un rôle"
        breadcrumb={{ routes }}
      />
    </div>
  );
};

export default CheminAttribuerRole;
