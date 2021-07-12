import React from 'react';
import './style.css';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function ButtonRecherche(){
    return(
        <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>  
    );
}
export default ButtonRecherche;