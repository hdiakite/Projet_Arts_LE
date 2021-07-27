import React from 'react';
import './App.css';
import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AjoutBases from './business/fluxMetierArts/Administration/AjoutBases';
import MenuAdministration from './business/fluxMetierArts/Administration/MenuAdministration';
import ModifierStatut from './business/fluxMetierArts/Administration/ModifierStatut';
import AttribuerRole from './business/fluxMetierArts/Administration/AttribuerRole';

function App() {
  return (
    <div className="App">
      <Router>
        <br />
        <HeaderLogo />

        <div>
          <MenuAdministration />
        </div>
        <Switch>
          <Route path="/Administration/AjoutBase" component={AjoutBases} />
          <Route
            path="/Administration/ModifierStatut"
            component={ModifierStatut}
          />
          <Route
            path="/Administration/AttribuerRole"
            component={AttribuerRole}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
