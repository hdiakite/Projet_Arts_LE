import React from 'react';
import './style.css';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'program',
    breadcrumbName: 'Programme',
  },
];

function CheminProgram() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Suivi programme essais"
        breadcrumb={{ routes }}
      />
    </div>
  );
}
export default CheminProgram;
