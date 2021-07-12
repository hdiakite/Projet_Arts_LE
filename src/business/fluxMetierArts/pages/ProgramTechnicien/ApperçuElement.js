import React, {useState} from 'react';
import {Typography, Button} from 'antd';
import './../stylePage.css'
import AperçuUneLigne from './AperçuUneLigne';
import BouttonValiderAction from './../../components/ButtonValiderAction';
import BouttonBasic from './../../components/ButtonBasic';
import ProgramEssaiEnAttente from './ProgramEssaiEnAttente';


const { Title, Text } = Typography;




const ApperçuElement = (props) => {
   const [mesure, setMesure] = useState(false);
    const test =() =>{
        setMesure(!mesure)
    }
    return (
        <div>
         
             <Title style={{marginLeft:50}} level={3}>Aperçu général des éléments</Title>
             <br/>
             
            <div className="titreformulaireMesure">
                <Text className="titreMesure"> Numero Element</Text>
                <Text className="titreMesure2">Voie</Text>
                <Text className="titreMesure2">Banc</Text>
            </div>
               
           
            <AperçuUneLigne/>
            <AperçuUneLigne/>
            <AperçuUneLigne/>
            <AperçuUneLigne/>
            <AperçuUneLigne/>
            <Button type="primary" onClick={test}>Entrer les données de mesures</Button>
            
            <BouttonValiderAction name="Valider & lancer l'essai"/>
            <BouttonBasic name="Retour"/>
            <ProgramEssaiEnAttente/>
        </div>
    );
}

export default ApperçuElement;
