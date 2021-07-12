import React from 'react';
import './style.css';
import { PageHeader } from 'antd';

const routes = [
    {
      path: 'index',
      breadcrumbName: 'Accueil',
    },
    {
      path: 'chargeALaSemaine',
      breadcrumbName: "Charge a la semaine",
    },
  ];

const CheminChargeSemaine = () => {
    return (
        <div>
                 <PageHeader
                className="site-page-header"
                title="Charge par technicien"
                breadcrumb={{ routes }}
            />
        </div>
    );
}

export default CheminChargeSemaine;
