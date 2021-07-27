import React from 'react';
import './App.css';
import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo';
import ExistingRequestCopy from './business/fluxMetierArts/pages/EffectuerDemande/ExistingRequestCopy';
import VirginRequest from './business/fluxMetierArts/pages/EffectuerDemande/VirginRequest';
import MesDemandes from './business/fluxMetierArts/pages/MesDemandes';
import RechercheGlobale from './business/fluxMetierArts/pages/RechercheGlobale';
import ArtMenu from './business/fluxMetierArts/pages/ArtMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <br />
        <HeaderLogo />

        <div>
          <ArtMenu />
        </div>
        <Switch>
          <Route path="/MesDemandes" component={MesDemandes} />
          <Route
            path="/EffectuerDemande/EffectuerDemandeCopieDessai"
            component={ExistingRequestCopy}
          />
          <Route
            path="/EffectuerDemande/EffectuerDemandeViergeFormulaire2"
            component={VirginRequest}
          />
          <Route path="/RechercheGlobale" component={RechercheGlobale} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
