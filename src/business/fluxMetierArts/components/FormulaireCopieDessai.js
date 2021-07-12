import React from 'react';
import './style.css';
import { Form, Input, Button,  DatePicker, Space , Select, Typography} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };

  const { Title } = Typography;
  const { RangePicker } = DatePicker;

function FormulaireCopieDessai() {

    const onFinish = values => {
        console.log('Received values of form:', values);
      };

    return (
        <>
              {/* ------------------------------Formulaire de cherche demande d'essai------------------------------------------------------------------*/}
        <Title className="titreEtapeDemande"level={3}>Copie d'une demande d'essai</Title>
        <Form {...layout} className="dimensionFormulaireCopieDessai" name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" layout="vertical">
            <Form.Item  className="labelCopieEssai" name="numeroDemandeDessai" label="Numéro demande essai">
                <Input  placeholder="20-100"/>
            </Form.Item>
            <Form.Item  className="labelCopieEssai" name="numeropProjet" label="Numéro de projet">
                <Input placeholder="1234"/>
            </Form.Item>
            <Form.Item  className="labelCopieEssai" name="demandeur" label="Demandeur">
                <Input placeholder="Iris Francisco"/>
            </Form.Item>
            <Form.Item  className="labelCopieEssai" name="technicien" label="Numéro demande d'essai">
                <Input placeholder="Veronique Le Rhun"/>
            </Form.Item>
            <Form.Item  className="labelCopieEssai" name="DesignationProduit" label="Designation produit" >
                <Select>
                    <Select.Option value="DesignationProduit"> </Select.Option>
                </Select>
            </Form.Item>
            <Form.Item  className="labelCopieEssai" name="Categorie" label="Catégorie" >
                <Select>
                    <Select.Option value="produit"></Select.Option>
                </Select>
            </Form.Item>
            <Form.Item  className="label1" name="periode" label="Période" >
            <Space direction="vertical">
                <RangePicker style={{ width:300}} />
            </Space>   
            </Form.Item>
            <Form.Item className="labelCopieEssai">
                <Button type="primary" icon={<SearchOutlined />} style={{marginLeft:200, marginTop:30}}>
                    Rechercher
                </Button>
            </Form.Item>
         </Form>
    </>
    );
}
export default FormulaireCopieDessai;