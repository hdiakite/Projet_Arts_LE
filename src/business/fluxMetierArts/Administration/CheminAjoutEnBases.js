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
    breadcrumbName: 'Ajout en base',
  },
];

const CheminAjoutEnBases = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Création"
        breadcrumb={{ routes }}
      />
    </div>
  );
};

export default CheminAjoutEnBases;
