import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../components/style.css';
import { Menu, Button } from 'antd';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import CheminAjoutEnBases from './CheminAjoutEnBases';
import AjoutTechnologie from './AjoutEnBase/AjoutTechnologie';

const AjoutBases = () => {
  const { path, url } = useRouteMatch();
  const [showComponents, setShowComponents] = useState(false);
  const onClick = () => setShowComponents(!showComponents);

  return (
    <div>
      <CheminAjoutEnBases />
      <Menu
        className="menuAjoutEnBase"
        style={{ width: 200 }}
        mode="vertical"
        theme="light"
        defaultOpenKeys={['1']}
      >
        <Menu.Item key="1">
          <Link to={`${url}/technology`}>Technologie</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Button type="text" onClick={onClick}>
            Catégorie
          </Button>
        </Menu.Item>
        <Menu.Item key="3">
          <Button type="text" onClick={onClick}>
            Statut essais
          </Button>
        </Menu.Item>
        <Menu.Item key="4">
          <Button type="text">Type de banc</Button>
        </Menu.Item>
        <Menu.Item key="5">
          <Button type="text"> Etuve </Button>
        </Menu.Item>
        <Menu.Item key="6">
          <Button type="text"> Essai</Button>
        </Menu.Item>
        <Menu.Item key="7">
          <Button type="text"> Unité</Button>
        </Menu.Item>
        <Menu.Item key="8">
          <Button type="text"> Priorité </Button>
        </Menu.Item>
        <Menu.Item key="9">
          <Button type="text">Banc</Button>
        </Menu.Item>
      </Menu>

      <Switch>
        <Route path={`${path}/technology`}>
          <AjoutTechnologie />
        </Route>
      </Switch>
    </div>
  );
};
export default AjoutBases;
