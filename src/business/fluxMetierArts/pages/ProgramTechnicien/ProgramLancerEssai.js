import React from 'react';
import './../stylePage.css';
import { BrowserRouter as Link } from 'react-router-dom';
import moment from 'moment';
import {
  Form,
  InputNumber,
  Typography,
  Input,
  Button,
  Divider,
  DatePicker,
  Upload,
  Modal,
  PageHeader,
  Select,
} from 'antd';
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const dateFormat = 'YYYY/MM/DD';
const { confirm } = Modal;

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'DemandeEssais',
    breadcrumbName: 'Demandes d"essais',
  },
  {
    path: 'LancerEssai',
    breadcrumbName: 'Lancer essai',
  },
];

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
    <>
      <PageHeader
        className="site-page-header"
        title="Programme demande d'essai"
        breadcrumb={{ routes }}
      />
      <div className="dimensionPage">
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
          <Form.Item
            className="titreInfoMesure"
            name="typeMesure"
            label="Type de mesure"
          >
            <Select>
              <Select.Option value="typeMesure"> Poids</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="titreInfoMesure" name="cycle" label="Cycle ">
            <Input className="" value="0" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item className="titreInfoMesure">
            <Upload>
              <Button className="importFichier" icon={<UploadOutlined />}>
                Importer un fichier
              </Button>
            </Upload>
          </Form.Item>

          <Divider orientation="left" style={{ opacity: 0.2 }}>
            Step
          </Divider>
          <Form.Item className="ButtonDroite">
            <Button type="primary" danger>
              <Link to="/PageTestRequests"> Annuler </Link>
            </Button>
            <Button
              className="ButtonEnregistrer"
              type="primary"
              onClick={showConfirm}
            >
              {'Lancer l"essai'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ProgramLancerEssai;
