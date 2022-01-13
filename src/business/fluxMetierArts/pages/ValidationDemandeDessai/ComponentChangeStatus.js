import React from 'react';
import { Form, Button, Typography, Divider, Select } from 'antd';
import '../../components/style.css';

const { Text } = Typography;

const ComponentChangeStatus = () => {
  return (
    <>
      <div className="validerdemandeEssai">
        <div className="ContenuDiv">
          <Text style={{ fontSize: 20, fontFamily: 'sans-serif' }}>
            Modifier le statut de l'essai
          </Text>
          <Divider orientation="left" style={{ opacity: 0.2 }}>
            Mise à jour statut
          </Divider>
          <Form>
            <Form.Item
              className=""
              value=""
              name="changerStatu"
              label="Changer le statut"
            >
              <Select style={{ width: 450 }} placeholder="Select new statut">
                <Select.Option value="prioriete"> priorite </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ marginLeft: 980 }} name="recherche">
              <Button type="primary">Modifier</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ComponentChangeStatus;
