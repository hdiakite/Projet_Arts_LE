import React from 'react';
import './../../stylePage.css';
import { Form, Button, Input, Typography } from 'antd';
import SaisieModificationBanc from './saisieModificationBanc';

const { Text } = Typography;

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};

const ModifierBAnc = () => {
  return (
    <div>
      <Form
        {...layout}
        className="dimensionFormulaire"
        name="dynamic_form_nest_item"
        layout="vertical"
      >
        <Form.Item
          className="titreInfoMesure"
          name="numeroEssai"
          label="Numero de demande d'essai"
        >
          <Input value="" />
        </Form.Item>
        <Form.Item className="titreInfoMesure">
          <Button
            className=""
            value="cycle"
            style={{ width: 180, marginTop: 30 }}
          >
            {' '}
            Choisir
          </Button>
        </Form.Item>

        <br />
        <div className="titreformulaireMesure">
          <Text className="titreMesure">{"Numero demande d'essai"}</Text>
          <Text className="titreMesure2"> Reference DDE</Text>
          <Text className="titreMesure2">Voie</Text>
          <Text className="titreMesure2">Banc</Text>
        </div>
        <SaisieModificationBanc />
        <SaisieModificationBanc />
        <SaisieModificationBanc />
        <Form.Item className="">
          <Button type="primary" className="">
            {' '}
            Enregistrer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModifierBAnc;
