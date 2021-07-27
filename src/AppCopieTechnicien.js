import React, { useState } from 'react';
import './App.css';

import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo';
import MesDemandes from './business/fluxMetierArts/pages/MesDemandes';
import RechercheGlobale from './business/fluxMetierArts/pages/RechercheGlobale';
import ProgramLancerEssai from './business/fluxMetierArts/pages/ProgramTechnicien/ProgramLancerEssai';
import ProgramEssai from './business/fluxMetierArts/pages/ProgramTechnicien/Program/ProgramEssai';
import ProgramEssaiEnCours from './business/fluxMetierArts/pages/ProgramTechnicien/ProgramEssaiEnCours';
import { Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const { SubMenu } = Menu;

const centerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState('Demandes');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  return (
    <div className="App">
      <br />
      <HeaderLogo />
      <Router>
        <div>
          <Menu
            className="nenuGeneral"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={centerStyle}
          >
            <Menu.Item key="Demandes">
              <Link to="/MesDemandes" style={{ color: 'white' }}>
                Demandes essais{' '}
              </Link>
            </Menu.Item>
            <Menu.Item key="demandeVierge">
              <Link
                to="/ProgramTechnicien/ProgramLancerEssai"
                style={{ color: 'white' }}
              >
                {' '}
                Je suis demandeur{' '}
              </Link>
            </Menu.Item>
            <Menu.Item key="program">
              <Link
                to="/ProgramTechnicien/Program/ProgramEssai"
                style={{ color: 'white' }}
              >
                Programme
              </Link>
            </Menu.Item>
            <Menu.Item key="recherche">
              <Link to="/RechercheGlobale" style={{ color: 'white' }}>
                Recherche globale
              </Link>
            </Menu.Item>
            <Menu.Item key="recherche">
              <Link
                to="/ProgramTechnicien/ProgramEssaiEnCours"
                style={{ color: 'white' }}
              >
                Essai en cours
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <Switch>
          <Route
            path="/ProgramTechnicien/Program/ProgramEssai"
            component={ProgramEssai}
          />
          <Route path="/MesDemandes" component={MesDemandes} />
          <Route path="/RechercheGlobale" component={RechercheGlobale} />
          <Route
            path="/ProgramTechnicien/ProgramLancerEssai"
            component={ProgramLancerEssai}
          />
          <Route
            path="/ProgramTechnicien/ProgramEssaiEnCours"
            component={ProgramEssaiEnCours}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
