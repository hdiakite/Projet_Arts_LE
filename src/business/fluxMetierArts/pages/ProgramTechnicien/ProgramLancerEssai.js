import React from 'react';
import './../stylePage.css';
import ReperageElement from './ReperageElement';
import moment from 'moment';
import {
  Form,
  InputNumber,
  Typography,
  Input,
  Button,
  Divider,
  DatePicker,
  Modal,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;
const dateFormat = 'YYYY/MM/DD';
const { confirm } = Modal;

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};
/* ----------------------------fonction Modal-----------------------------*/
function showConfirm() {
  confirm({
    title: 'Confirmer la position des éléments',
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

const ProgramLancerEssai = () => {
  return (
    <div className="dimensionPage">
      <Title className="titreEtapeDemande" level={3}>
        {"Programme demande d'essai"}
      </Title>
      <Form
        {...layout}
        className="dimensionFormulaire"
        name="dynamic_form_nest_item"
        layout="vertical"
      >
        <Form.Item
          className="titreInfoProgramEssai"
          name="dateProgram"
          label="Date"
        >
          <DatePicker
            className="infoProgramEssai"
            defaultValue={moment('2015/01/01', dateFormat)}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item
          className="titreInfoProgramEssai"
          name="nombreElementTotal"
          label="Nombre d'élement Total"
        >
          <Input className="infoProgramEssai" />
        </Form.Item>
        <Form.Item
          className="titreInfoProgramEssai"
          name="SortiePrevue"
          label="Sortie prévue "
        >
          <Input
            className="infoProgramEssai"
            value="nbElementBanc"
            style={{ width: 180 }}
          />
        </Form.Item>
        <Form.Item
          className="titreDureeEstimee"
          name="dureeEssaiEstime"
          label="Durée de l'essai estimée"
          rules={[{ required: true }]}
        >
          <InputNumber
            className=""
            value="nbElementBanc"
            style={{ width: 180 }}
          />
        </Form.Item>

        <Divider orientation="left" style={{ opacity: 0.2 }}>
          Step
        </Divider>
        <Title className="titreEtapeDemande" level={4}>
          {'Répérage des éléments'}
        </Title>
        <ReperageElement />
        <ReperageElement />
        <Form.Item className="ButtonDroite">
          <Button className="ButtonAnuller">Annuler</Button>
          <Button
            className="ButtonEnregistrer"
            type="primary"
            onClick={showConfirm}
          >
            Valider
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProgramLancerEssai;
