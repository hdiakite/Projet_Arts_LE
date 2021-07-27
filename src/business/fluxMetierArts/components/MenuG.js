import React, { useState } from 'react';

import './style.css';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
};

function MenuG() {
  const [current, setCurrent] = useState('effectuerDemande');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  return (
    <div>
      <Menu
        className="nenuGeneral"
        classonClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={centerStyle}
      >
        <Menu.Item className="nomMenu" key="demande">
          Demandes essais
        </Menu.Item>
        <SubMenu
          className="nomMenu"
          key="effectuerDemande"
          title="effectuer une demande"
        >
          <Menu.ItemGroup title="">
            <Menu.Item key="demandeVierge">Demande vierge</Menu.Item>
            <Menu.Item key="copieDemande">Copie demandes </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item className="nomMenu" key="recherche">
          Recherche globale
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default MenuG;
