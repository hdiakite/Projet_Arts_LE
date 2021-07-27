import React from 'react';
import { Form, Button, Input, Typography, Divider } from 'antd';
import '../../components/style.css';

const { Text } = Typography;

const ComposantValiderDemandeEssai = () => {
  return (
    <div className="validerdemandeEssai">
      <div className="ContenuDiv">
        <Text style={{ fontSize: 20, fontFamily: 'sans-serif' }}>
          {"Validation demande d'essai"}
        </Text>
        <Divider orientation="left" style={{ opacity: 0.2 }}>
          Valider ou Envoyer un commentaire
        </Divider>
        <Form name="dynamic_form_nest_item" autoComplete="off">
          <Form.Item className="validerDemande" name="validerDemande">
            <Button type="primary">Valider la demande</Button>
          </Form.Item>
          <Form.Item className="ButtonEssaiTerminer" name="validerDemande">
            <Button danger>Essai Terminé</Button>
          </Form.Item>
          <Form.Item
            className="inputCommentaireResponsale"
            value=""
            name={['commentaireDemandeEssai']}
            label="Ajouter un commantaire"
          >
            <Input.TextArea
              style={{ width: 450 }}
              type="primary"
              showCount
              maxLength={200}
              placeholder="Demande incomplète"
            />
          </Form.Item>
          <Form.Item
            className="buttontEnvoiCommentaire"
            name="buttontEnvoiCommentaire"
          >
            <Button>envoyer le commentaire</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ComposantValiderDemandeEssai;
