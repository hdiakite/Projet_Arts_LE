import React from 'react';

import { Table, Space } from 'antd';

const { Column } = Table;

const data = [];

const TableauReferecneDDE = () => {
  return (
    <div className="">
      <Table dataSource={data} />
      <Column
        title="Numéro d'essai"
        dataIndex="numeroDessai"
        key="numeroDessai"
      ></Column>
      <Column
        title="Numéro de suivis DDE"
        dataIndex="numeroSuivisDDE"
        key="numeroSuivisDDE"
      ></Column>
      <Column title="Banc" dataIndex="banc" key="banc"></Column>
      <Column
        title="Action"
        key="action"
        render={(text, record) => <Space size="middle"></Space>}
      ></Column>
      <br />
    </div>
  );
};

export default TableauReferecneDDE;
