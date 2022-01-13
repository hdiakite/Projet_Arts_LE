import React from 'react';
import './App.css';
import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo';
import PageTestRequests from './business/fluxMetierArts/pages/PageTestRequests';
import ExistingRequestCopy from './business/fluxMetierArts/pages/PagesCreationRequest/ExistingRequestCopy';
import VirginRequest from './business/fluxMetierArts/pages/PagesCreationRequest/VirginRequest';
import GlobalRearch from './business/fluxMetierArts/pages/GlobalRearch';
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
          <Route path="/PageTestRequests" component={PageTestRequests} />
          <Route
            path="/EffectuerDemande/EffectuerDemandeCopieDessai"
            component={ExistingRequestCopy}
          />
          <Route
            path="/EffectuerDemande/EffectuerDemandeViergeFormulaire2"
            component={VirginRequest}
          />
          <Route path="/RechercheGlobale" component={GlobalRearch} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
