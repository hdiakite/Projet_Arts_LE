import React from 'react';
import './../stylePage.css'
import SaisieDonneeDeMesure from './SaisieDonneeDeMesure';
import { Typography, Button, Tag, Modal,} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';



const { Title } = Typography;
const { confirm } = Modal;

/*----------------------------fonction Modal-----------------------------*/
  function showConfirm() {
    confirm({
      title:"Confirmer demande d'essai terminé",
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('non');
      },
    });
  }

  
const ProgramEssaiEnAttente = () => {

    return (
        <div className="dimensionPage">
               <Title style={{display:'inline-block'}} className="titreEtapeDemande"level={3}>Mesure sur essai : 20-120</Title>
               <Tag style={{display:'inline-block',width:80,textAlign:'center', marginLeft:15}} color="red">En attente</Tag> 
                    <SaisieDonneeDeMesure/>
                    <br/>
                    <Button className="ButtonAnuller">Annuler</Button>
                    <Button className="ButtonTerminer" type="primary"  onClick={showConfirm}>Valider & lancer l'essai</Button>
        </div>     
    );
}

export default ProgramEssaiEnAttente;
