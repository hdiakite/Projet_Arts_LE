import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo';
import AdditionToBase from './business/fluxMetierArts/Administration/AdditionToBase';
import MenuAdministration from './business/fluxMetierArts/Administration/MenuAdministration';
import ModifieStatus from './business/fluxMetierArts/Administration/ModifieStatus';
import AttributeRole from './business/fluxMetierArts/Administration/AttributeRole';

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
          <Route
            path="/Administration/AddionToBase"
            component={AdditionToBase}
          />
          <Route
            path="/Administration/ModifieStatus"
            component={ModifieStatus}
          />
          <Route
            path="/Administration/AttributeRole"
            component={AttributeRole}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
