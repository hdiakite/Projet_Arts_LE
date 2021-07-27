import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const data = [];

const { Column } = Table;

const AttribuerRole = () => {
  const [searchText, searchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    searchedColumn({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  return (
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
  );
};

export default AttribuerRole;
