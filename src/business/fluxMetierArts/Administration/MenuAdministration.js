import React, { useState } from 'react';
import { Menu } from 'antd';

import './../components/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const { SubMenu } = Menu;

const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
};

const MenuAdministration = (props) => {
  const [current, setCurrent] = useState('Demandes');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  return (
    <div>
      <Menu
        className="nenuGeneral"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={centerStyle}
      >
        <Menu.Item key="AjoutBase">
          <Link to="/Administration/AjoutBase" style={{ color: 'white' }}>
            Ajout en base{' '}
          </Link>
        </Menu.Item>
        <Menu.Item key="modifierStatut">
          <Link to="/Administration/ModifierStatut" style={{ color: 'white' }}>
            Modifier le Statut{' '}
          </Link>
        </Menu.Item>
        <Menu.Item key="attribuerRole">
          <Link to="/Administration/AttribuerRole" style={{ color: 'white' }}>
            Attribuer un role{' '}
          </Link>
        </Menu.Item>
        <Menu.Item key="supprimerMesure">
          <Link to="/SupprimerMesure" style={{ color: 'white' }}>
            Supprimer une mesure
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default MenuAdministration;
