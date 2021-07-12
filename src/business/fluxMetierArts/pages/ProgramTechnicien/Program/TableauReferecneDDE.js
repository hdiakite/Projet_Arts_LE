import React from 'react';

import { Table, Space, } from 'antd';

const columns = [
    {
      title: "Numéro d'essai",
      dataIndex: 'numeroDessai',
      key: 'numeroDessai',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Numéro de suivis DDE',
      dataIndex: 'numeroSuivisDDE',
      key: 'numeroSuivisDDE',
    },
    {
      title: 'Banc',
      dataIndex: 'banc',
      key: 'banc',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Supprimer</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    ];
  

const TableauReferecneDDE = () => {

    return (
             <div  className="">
            <Table columns={columns} dataSource={data}/>
            <br/>

            </div>
           
    );
}

export default TableauReferecneDDE;
