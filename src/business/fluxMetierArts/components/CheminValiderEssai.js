import React from 'react';
import './style.css';
import { PageHeader } from 'antd';

const routes = [
    {
      path: 'index',
      breadcrumbName: 'Accueil',
    },
    {
      path: 'demandesEssais',
      breadcrumbName: "Demande essais",
    },
  ];

const CheminValiderEssai = () => {
    return (
        <div>
               <PageHeader
                className="site-page-header"
                title="Validation d'une demande d'essai"
                breadcrumb={{ routes }}
            />
        </div>
    );
}

export default CheminValiderEssai;
