import React, { useState } from 'react';
import './App.css';

import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo';
import PageTestRequests from './business/fluxMetierArts/pages/PageTestRequests';
import GlobalRearch from './business/fluxMetierArts/pages/GlobalRearch';
import ChargeALaSemaine from './business/fluxMetierArts/pages/ChargeALaSemaine';
import ExistingRequestCopy from './business/fluxMetierArts/pages/PagesCreationRequest/ExistingRequestCopy';
import VirginRequest from './business/fluxMetierArts/pages/PagesCreationRequest/VirginRequest';
import PageValidationDemandeEssai from './business/fluxMetierArts/pages/ValidationDemandeDessai/ValidationTestRequests';
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
            <Menu.Item key="Demand">
              <Link to="/PageTestRequests" style={{ color: 'white' }}>
                Demandes essais{' '}
              </Link>
            </Menu.Item>
            <Menu.Item key="testRequest">
              <SubMenu
                className="nomMenu"
                key="effectuerDemande"
                title="effectuer une demande"
              >
                <Menu.ItemGroup title="">
                  <Menu.Item key="copie">
                    <Link to="/EffectuerDemande/EffectuerDemandeCopieDessai">
                      {"Copie d'essai"}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="Virgin">
                    <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire2">
                      Demande vierge
                    </Link>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu.Item>
            <Menu.Item key="demandeVierge">
              <Link to="/ChargeALaSemaine" style={{ color: 'white' }}>
                {' '}
                Charge à la semaine
              </Link>
            </Menu.Item>
            <Menu.Item key="recherche">
              <Link to="/RechercheGlobale" style={{ color: 'white' }}>
                Recherche globale
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        <Switch>
          <Route path="/RechercheGlobale" component={GlobalRearch} />
          <Route
            path="/PageValidationDemandeEssai"
            component={PageValidationDemandeEssai}
          />
          <Route
            path="/EffectuerDemande/EffectuerDemandeCopieDessai"
            component={ExistingRequestCopy}
          />
          <Route
            path="/EffectuerDemande/EffectuerDemandeViergeFormulaire2"
            component={VirginRequest}
          />
          <Route path="/PageTestRequests" component={PageTestRequests} />
          <Route path="/ChargeALaSemaine" component={ChargeALaSemaine} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
