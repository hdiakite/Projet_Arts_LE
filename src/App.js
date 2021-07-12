import React from 'react';
import './App.css';
import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo'
import EffectuerDemandeCopieDessai from './business/fluxMetierArts/pages/EffectuerDemande/EffectuerDemandeCopieDessai';
import EffectuerDemandeViergeFormulaire1 from './business/fluxMetierArts/pages/EffectuerDemande/EffectuerDemandeViergeFormulaire1';
import EffectuerDemandeViergeFormulaire2 from './business/fluxMetierArts/pages/EffectuerDemande/EffectuerDemandeViergeFormulaire2';
import MesDemandes from './business/fluxMetierArts/pages/MesDemandes';
import RechercheGlobale from './business/fluxMetierArts/pages/RechercheGlobale';
import ArtMenu from './business/fluxMetierArts/pages/ArtMenu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  

function App() {

   
 
    return ( 
       
        <div className = "App" >
            <Router>
            <br/>
            <HeaderLogo/>
        
        <div>
               <ArtMenu/>
            </div>          
            <Switch>       
                <Route path="/MesDemandes" component = {MesDemandes}/>
                <Route path="/EffectuerDemande/EffectuerDemandeCopieDessai" component={EffectuerDemandeCopieDessai}/>
                <Route path="/EffectuerDemande/EffectuerDemandeViergeFormulaire1" component={EffectuerDemandeViergeFormulaire1}/>
                <Route path="/EffectuerDemande/EffectuerDemandeViergeFormulaire2" component={EffectuerDemandeViergeFormulaire2}/>
                <Route path="/RechercheGlobale" component={RechercheGlobale}/>

            </Switch>
        </Router> 
        </div>	
    );
}
export default App;
