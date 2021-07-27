import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: "Numéro d'essai",
    dataIndex: 'numeroDessai',
    key: 'numeroDessai',
  },
  {
    title: 'Demandeur',
    dataIndex: 'demandeur',
    key: 'demandeur',
  },
  {
    title: 'Technicien',
    dataIndex: 'tchnicien',
    key: 'technicien',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'Numero de projet',
    dataIndex: 'numeroProjet',
    key: 'numeroProjet',
  },
  {
    title: 'Statut',
    key: 'statut',
    dataIndex: 'statut',
    render: function render(tags) {
      return (
        <>
          {tags.map((tagItem) => {
            let color = tagItem.length > 5 ? 'geekblue' : 'green';
            if (tagItem === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tagItem}>
                {tagItem.toUpperCase()}
              </Tag>
            );
          })}
        </>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: function render(text, record) {
      return (
        <Space size="middle">
          <Link to="">Copier</Link>
        </Space>
      );
    },
  },
];

const data = [];

function ResultsTableSearch() {
  return (
    <div className="dimensionTableau">
      <Table columns={columns} dataSource={data} />
      <br />
      <Button type="primary" danger>
        <Link to="/MesDemandes">Annuler</Link>
      </Button>
    </div>
  );
}
export default ResultsTableSearch;
