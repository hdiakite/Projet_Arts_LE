import React from 'react';
import './stylePage.css'
import {Form,Select, Table, Divider, DatePicker} from 'antd'
import CheminChargeSemaine from './../components/CheminChargeSemaine'

const { Option } = Select;
const { Column } = Table;

const counterStyle = <em style={{background:'#787978'}}>0 </em>


const data =[];

const onFinish = (values: any) => {
    console.log('Finish:', values);
  };


  function callback(key) {
    console.log(key);
  }

function ChargeALaSemaine(){
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Finish:', values);
      };

    return (
        <>
        <CheminChargeSemaine/>
    {/*------------------Formulaire recherche demande & technicien--------------------------------------------*/}
        <div className="DimentionPage">
            <Form form={form} className="" name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item className="" name="technicien" label="Technicien">
                    <Select
                    placeholder="Select Technicien" style={{width:160}}
                    >
                        <Option value="technicien">technicien</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <DatePicker picker="week" style={{width:200, marginLeft:500}}/>
                </Form.Item>
            </Form>
            <Divider style={{opacity:0.20}}> Charge par technicien</Divider>
{/*-----------------------------------------------------Tableau------------------------------------------------------*/ }
    
            <Table dataSource={data}>
                <Column title="Numero d'essai" dataIndex="numeroEssai" key="numeroEssai" />
                <Column title="Technicien" dataIndex="technicien" key="technicien" />
                <Column title="Demandeur" dataIndex="demandeur" key="demandeur" />
                <Column title="Numero de banc" dataIndex="NumeroBanc" key="NumeroBanc" />
                <Column title="Priorité" dataIndex="priorite" key="priorite" />
                <Column title="Date de lancement" dataIndex="dateL" key="dateL" />
            </Table>,
       
        </div>
       </> 
    );
}
export default ChargeALaSemaine;
