import React from 'react';
import { Menu} from 'antd';
import { useState } from 'react';
import './../components/style.css';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const { SubMenu } = Menu;

const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };

const ArtMenu = (props) => {

 

    const [current, setCurrent] = useState('Demandes');


    const  handleClick = e => {
        console.log('click ', e);
        setCurrent({ current: e.key });
    };
    return (
        <div>
                <Menu className="nenuGeneral" onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={centerStyle}>
                    <Menu.Item  key="Demandes" >
                        <Link to="/MesDemandes" style={{color:'white'}}>Liste demandes essais </Link>
                    </Menu.Item>
                    <SubMenu className="nomMenu" key="effectuerDemande"  title="effectuer une demande">
                        <Menu.ItemGroup title="">
                            <Menu.Item key="copieDemande">
                                <Link to="/EffectuerDemande/EffectuerDemandeCopieDessai">Copie d'essai</Link>      
                            </Menu.Item>
                            <Menu.Item key="copieDemande">
                                <Link to="/EffectuerDemande/EffectuerDemandeViergeFormulaire2">Demande vierge</Link>      
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="recherche">
                        <Link to="/RechercheGlobale" style={{color:'white'}}>Recherche globale</Link>
                    </Menu.Item>
                </Menu>
        </div>
    );
}
export default ArtMenu;
