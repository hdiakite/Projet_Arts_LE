import React from 'react';
import './style.css';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'EffectuerDemande',
    breadcrumbName: 'Effectuer une demande',
  },
  {
    path: 'DemandeVierge',
    breadcrumbName: 'Demande vierge',
  },
];

function CheminDemandeVierge() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Creation d'une demande d'essai"
        breadcrumb={{ routes }}
      />
    </div>
  );
}
export default CheminDemandeVierge;
