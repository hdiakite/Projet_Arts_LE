import React from 'react';
import { Table, Space } from 'antd';

const { Column } = Table;
const data = [];

const TableauAnomalie = () => {
  return (
    <div className="">
      <Table dataSource={data}>
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
        <Column title="Cycle" dataIndex="cycle" key="cycle"></Column>
        <Column title="Banc" dataIndex="banc" key="banc"></Column>
        <Column
          title="Action"
          key="action"
          render={(text, record) => <Space size="middle"></Space>}
        />
      </Table>
      <br />
    </div>
  );
};
export default TableauAnomalie;
