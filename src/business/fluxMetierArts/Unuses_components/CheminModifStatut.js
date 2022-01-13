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
    breadcrumbName: 'Modififcation de statut',
  },
];

const CheminModifStatut = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Modifier le statut"
        breadcrumb={{ routes }}
      />
    </div>
  );
};

export default CheminModifStatut;
