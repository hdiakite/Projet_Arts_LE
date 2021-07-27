import React from 'react';
import './style.css';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'demandeDessais',
    breadcrumbName: "Demandes d'essais",
  },
];

function CheminDemandeCopieDessai() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Liste des demandes d'essais"
        breadcrumb={{ routes }}
      />
    </div>
  );
}
export default CheminDemandeCopieDessai;
