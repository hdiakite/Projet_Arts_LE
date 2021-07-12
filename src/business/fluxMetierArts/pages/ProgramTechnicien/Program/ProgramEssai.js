import React from 'react';
import './../../stylePage.css'
import { useState } from 'react';
import { Typography,Tabs, Modal, Button} from 'antd';
import TableauReferecneDDE from './TableauReferecneDDE';
import ModalReference from './ModalReference';
import TableauAnomalie from './TableauAnomalie';
import ModalAnomalie from './ModalAnomalie';
import ModifierBAnc from './ModifierBAnc';
import CheminProgram from '../../../components/CheminProgram';

const { Title } = Typography;
const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}
const ProgramEssai = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <div className="ProgramEssai">
            <CheminProgram/>
            <Title style={{display:'inline-block'}} className="titreEtapeDemande"level={3}>Programme</Title>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Liste des reférences" key="1">
                    <TableauReferecneDDE/>
                    <Button type="primary" onClick={showModal}>
                        Creer une reférence DDE
                    </Button>
                    <Modal title="Ajouter une reference DDE" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <ModalReference/>
                    </Modal>
                </TabPane>
                <TabPane tab="Anomalies" key="2">
                    <TableauAnomalie/>
                    <Button type="primary" onClick={showModal}>
                        Signaler une anomalie
                    </Button>
                    <Modal title="Ajouter une reference DDE" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <ModalAnomalie/>
                    </Modal>
                </TabPane>
                <TabPane tab="Modifier un banc" key="3">
                    <ModifierBAnc/>
                </TabPane>
            </Tabs>
        
        </div>
    );
}

export default ProgramEssai;
