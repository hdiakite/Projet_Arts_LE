import React from 'react';
import './App.css';
import { useState } from 'react';
import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo'
import EffectuerDemandeCopieDessai from './business/fluxMetierArts/pages/EffectuerDemande/EffectuerDemandeCopieDessai';
import EffectuerDemandeViergeFormulaire1 from './business/fluxMetierArts/pages/EffectuerDemande/EffectuerDemandeViergeFormulaire1';
import EffectuerDemandeViergeFormulaire2 from './business/fluxMetierArts/pages/EffectuerDemande/EffectuerDemandeViergeFormulaire2';
import MesDemandes from './business/fluxMetierArts/pages/MesDemandes';
import RechercheGlobale from './business/fluxMetierArts/pages/RechercheGlobale';
import { Menu} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

    const { SubMenu } = Menu;

    const centerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      };
    

function App() {

   
    const [current, setCurrent] = useState('Demandes');
 
    const  handleClick = e => {
        console.log('click ', e);
        setCurrent({ current: e.key });
    };
    return ( 
       
        <div className = "App" >
            <br/>
            <HeaderLogo/>
        <Router>
        <div>
                <Menu className="nenuGeneral" onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={centerStyle}>
                    <Menu.Item  key="Demandes" >
                        <Link to="/MesDemandes" style={{color:'white'}}>Demandes essais </Link>
                    </Menu.Item>
                    <SubMenu className="nomMenu" key="effectuerDemande"  title="effectuer une demande">
                        <Menu.ItemGroup title="">
                            <Menu.Item key="copieDemande">
                                <Link to="/EffectuerDemande/EffectuerDemandeCopieDessai">Copie d'essai</Link>      
                            </Menu.Item>
                            <SubMenu key="formulaire" title="Demande vierge">
                                <Menu.ItemGroup title="Formulaire-1">
                                    <Menu.Item key="CatFA1">
                                        <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire1">Lot BCMC (SQUM) </Link>
                                    </Menu.Item>
                                    <Menu.Item key="CatFA2">
                                    <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire1">O.E.M. (NiCd)</Link>
                                    </Menu.Item>
                                    <Menu.Item key="CatFA3">
                                        <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire1">O.E.M. (NiMH)</Link>
                                    </Menu.Item>
                                    <Menu.Item key="CatFA4">
                                        <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire1">Plaintes / Retour (SAQ)</Link>
                                    </Menu.Item>
                                    <Menu.Item key="CatFA5">
                                        <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire1">PROCEDE ELECTRIQU</Link>
                                    </Menu.Item>
                                    <Menu.Item key="CatFA6">
                                        <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire1">Qualification batteries (DT)</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title="Formulaire-2">
                                    <Menu.Item key="CatFB1">
                                        <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire2">Contrôle entrée</Link>
                                    </Menu.Item>
                                    <Menu.Item key="CatFBZ">
                                        <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire2">Libération de produit (SQUF)</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="recherche">
                        <Link to="/RechercheGlobale" style={{color:'white'}}>Recherche globale</Link>
                    </Menu.Item>
                    
                </Menu>
            </div>          
            <Switch>
                
                <Route path="/EffectuerDemande/EffectuerDemandeCopieDessai" component={EffectuerDemandeCopieDessai}/>
                <Route path="/EffectuerDemande/EffectuerDemandeViergeFormulaire1" component={EffectuerDemandeViergeFormulaire1}/>
                <Route path="/EffectuerDemande/EffectuerDemandeViergeFormulaire2" component={EffectuerDemandeViergeFormulaire2}/>
                <Route path="/MesDemandes" component = {MesDemandes }/>
                <Route path="/RechercheGlobale" component = {RechercheGlobale}/>

            </Switch>
        </Router> 
        </div>	
    );
}
export default App;
