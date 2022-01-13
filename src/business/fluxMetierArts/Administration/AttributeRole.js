import React, { useState } from 'react';
import { Table, Space, PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'AjoutBase',
    breadcrumbName: 'Attribution de rôle',
  },
];

const data = [];

const { Column } = Table;

const AttributeRole = () => {
  const [searchText, searchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    searchedColumn({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  return (
    <>
      <div>
        <PageHeader
          className="site-page-header"
          title="Attribuer un rôle"
          breadcrumb={{ routes }}
        />
      </div>
      <div>
        <Table dataSource={data}>
          const columns = [
          <Column title="Name" dataIndex="name" key="name" width="30%" />
          <Column title="Age" dataIndex="age" key="age" width="20%" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => <Space size="middle"></Space>}
          ></Column>
        </Table>
      </div>
    </>
  );
};

export default AttributeRole;
