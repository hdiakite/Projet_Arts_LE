import React from 'react';
import {Form,Select, Tabs, Table, Space, Tag } from 'antd'
import './style.css';

const { Option } = Select;
const { TabPane } = Tabs;
const { Column } = Table;




const data =[];



function DemandesEssais(){
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Finish:', values);
      };

    return (
/*------------------Formulaire recherche demande & technicien--------------------------------------------*/ 
        <div className="dimansionDemandeEssai">
            <Form form={form} className="" name="horizontal_login" layout="inline" onFinish={onFinish}>
                {/*------------------------------------------Tabs------------------------------) */}
                <Tabs  defaultActiveKey="1" className="positionTabs" layout="inline">
                    <TabPane tab="Tous 0" key="1">
                    </TabPane>
                    <TabPane tab="Brouillons 0" key="2">
                 
                    </TabPane>
                    <TabPane tab="En attente de validation 0" key="3">
                
                    </TabPane>
                    <TabPane tab="En attente de traitement 0" key="4">
                
                    </TabPane>
                    <TabPane tab="En cours 0" key="5">
                
                    </TabPane>
                    <TabPane tab="Terminés 0" key="6">     
                    </TabPane>
                </Tabs>
        
                <Form.Item className=" labelDemandesEssais" name="demandeur" label="Demandeur">
                    <Select
                    placeholder="Select demandeur" style={{width:160}}
                    >
                        <Option value="demandeur">demandeur</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="" name="technicien" label="Technicien">
                    <Select
                    placeholder="Select Technicien" style={{width:160}}
                    >
                        <Option value="technicien">technicien</Option>
                    </Select>
                </Form.Item>
            </Form>
{/*-----------------------------------------------------Tableau------------------------------------------------------*/ }
            <div className="tableauMesDemande">
            <Table dataSource={data}>
                <Column title="Numero d'essai" dataIndex="numeroEssai" key="numeroEssai" />
                <Column title="Demandeur" dataIndex="demandeur" key="demandeur" />
                <Column title="Date demande d'essai" dataIndex="date" key="date" />
                <Column title="Priorité" dataIndex="priorite" key="priorite" />
                <Column
                title="Statut"
                dataIndex="statut"
                key="statut"
                render={statut => (
                <>
                    {statut.map(statut => (
                    <Tag color="blue" key={statut}>
                    {statut}
                    </Tag>
                    ))}
                </>
                )}
                />
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    </Space>
                )}
                />
            </Table>,
       
        </div>
        </div> 
    );
}
export default DemandesEssais;
