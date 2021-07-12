import React from 'react';
import './App.css';
import { useState } from 'react';
import HeaderLogo from './business/fluxMetierArts/components/HeaderLogo'
import MesDemandes from './business/fluxMetierArts/pages/MesDemandes';
import RechercheGlobale from './business/fluxMetierArts/pages/RechercheGlobale';
import ChargeALaSemaine from './business/fluxMetierArts/pages/ChargeALaSemaine';
import PageValidationDemandeEssai from './business/fluxMetierArts/pages/ValidationDemandeDessai/PageValidationDemandeEssai';
import { Menu } from 'antd';
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

    const [isOpen, setIsOpen] = useState (false)
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
                    
                    <Menu.Item key="copieDemande">
                        <Link to="/PageValidationDemandeEssai"style={{color:'white'}}>Je suis demandeur</Link>      
                    </Menu.Item>
                    <Menu.Item key="demandeVierge">
                            <Link to="/ChargeALaSemaine" style={{color:'white'}}> Charge à la semaine</Link>
                    </Menu.Item>
                    <Menu.Item key="recherche">
                        <Link to="/RechercheGlobale" style={{color:'white'}}>Recherche globale</Link>
                    </Menu.Item>
                </Menu>
            </div>          
            <Switch>
                <Route path="/PageValidationDemandeEssai" component = {PageValidationDemandeEssai}/>
                <Route path="/MesDemandes" component = {MesDemandes }/>
                <Route path="/RechercheGlobale" component = {RechercheGlobale}/>
                <Route path="/ChargeALaSemaine" component = {ChargeALaSemaine}/>

            </Switch>
        </Router> 
        </div>	
    );
}
export default App;