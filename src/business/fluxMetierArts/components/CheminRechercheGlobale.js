import React from 'react';
import './style.css';
import { PageHeader } from 'antd';


const routes = [
    {
      path: 'index',
      breadcrumbName: 'Accueil',
    },
    {
      path: 'rechercheGlobale',
      breadcrumbName: "Recherche Globale",
    },
  ];

  function CheminRechercheGlobale() {
      return ( 
          <div>
            <PageHeader
                className="site-page-header"
                title="Recherche globale"
                breadcrumb={{ routes }}
            />	
        </div>
              
      );
    }
  export default CheminRechercheGlobale;