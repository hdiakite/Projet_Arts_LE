import React, { useState } from 'react';
import './style.css';
import SeriesTestingForm from './SeriesTestingForm';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  InputNumber,
  Upload,
  Typography,
  Divider,
  PageHeader,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};

const { Title } = Typography;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'EffectuerDemande',
    breadcrumbName: 'Effectuer une demande',
  },
  {
    path: 'DemandeVierge',
    breadcrumbName: 'Demande vierge',
  },
];

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const fournisseurs = [
  {
    id: 'artsEnergy',
    name: 'Arts-Energy',
  },
];

/* const formulaireReferenceDisable = <><Select>
                                <Select.Option value="referenceArts"  disabled="true"> designation</Select.Option>
                            </Select></>

    const formulaireReference = <><Select rules={[{ required: true }]}>
                                <Select.Option value="referenceArts"> designation</Select.Option>
                            </Select></>  
    */

function TestRequestForm() {
  const [showSeriesTestingComponent, setShowText] = useState(false);
  const onClick = () => setShowText(!showSeriesTestingComponent);
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Creation d'une demande d'essai"
        breadcrumb={{ routes }}
      />
      <Form
        {...layout}
        id="form-demande-essai"
        className="dimensionFormulaire"
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        .
        <Button className="boutonChangerFormulaire" onClick={onClick}>
          Changer de formulaire
        </Button>
        <Divider style={{ backgroundColor: 'white' }} />
        {/* ------------------------------Information generale------------------------------------------------------------------*/}
        <Title className="titreEtapeDemande" level={4}>
          Information générale
        </Title>
        <Form.Item
          className="labelTextArea"
          name={['OjetEssai']}
          label="Objet de l'essai"
        >
          <Input.TextArea id="objet" showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          className="label1"
          name="demandeur"
          label="Demandeur"
          rules={[{ required: true }]}
        >
          <Input id="demandeur" placeholder="demandeur" />
        </Form.Item>
        <Form.Item
          className="label1"
          name="dateDemande"
          label="Date de la demande"
          rules={[{ required: true }]}
        >
          <DatePicker id="dateDemande" style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          className="label1"
          name="categorie"
          label="Catégorie"
          rules={[{ required: true }]}
        >
          <Input id="categorie" />
        </Form.Item>
        <Form.Item
          className="label1"
          name="priorite"
          label="Priorité"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="prioriete"> priorite </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="label1"
          name="dateMaxLancement"
          label="Date max de lancement"
        >
          <DatePicker style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          className="label1"
          name="technologie"
          label="Technologie"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="technologie"> Li-ion</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="label1"
          name="produit"
          label="Produit"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="powerBank">Batterie</Select.Option>
            <Select.Option value="element">Element</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="label1" name="Designation" label="Designation">
          <Select
            disabled={showSeriesTestingComponent}
            rules={[{ required: true }]}
          >
            <Select.Option value="designation1">Designation 1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="label1"
          name="referenceArts"
          label="Reference ARTS"
          rules={[{ required: true }]}
        >
          <Select disabled={showSeriesTestingComponent}>
            <Select.Option value="reference1">Reference 1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="label1"
          name="capaciteNominale"
          label="Capacite nominale"
        >
          <InputNumber
            style={{ width: 200 }}
            disabled={showSeriesTestingComponent}
            rules={[{ required: true }]}
          />
        </Form.Item>
        <Form.Item
          className="label1"
          name="clientFournisseur"
          label="Client/Fournisseur"
          rules={[{ required: true }]}
        >
          <Select>
            {fournisseurs.map(({ id, name }) => (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          className="label1"
          name="numeroProjet"
          label="Numéro de projet"
        >
          <Input placeholder="1234" />
        </Form.Item>
        <Form.Item
          className="label1"
          name="numeroCommande"
          label="Numéro de commmande"
        >
          <Input placeholder="1234" />
        </Form.Item>
        <Form.Item
          className="label1"
          name="quantiteCommande"
          label="Quantité commandée/ reçue"
        >
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          className="label1"
          name="numeroOF_BR"
          label="Numéro OF/Numéro BR"
        >
          <Input placeholder="1234" />
        </Form.Item>
        <Form.Item
          className="label1"
          name="numeroOrdreAchat"
          label="Numéro d'ordre d'achat"
        >
          <Input placeholder="1234" />
        </Form.Item>
        <Form.Item
          className="label1"
          name="numeroPlanQualite"
          label="Numéro de plan qualité"
        >
          <Input placeholder="1234" />
        </Form.Item>
        <Form.Item
          className="labelTextArea"
          value=""
          name={['descriptionEssai']}
          label="Description"
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item className="update"></Form.Item>
        <Form.Item className="update">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Télécharger un fichier</Button>
          </Upload>
        </Form.Item>
        {showSeriesTestingComponent ? <SeriesTestingForm /> : null}
        <Form.Item className="alignButton">
          <Button type="primary" danger>
            <Link to="/PageTestRequests"> Annuler </Link>
          </Button>
        </Form.Item>
        <Form.Item className="alignButton">
          <Button>
            <Link to=""> Aperçu </Link>
          </Button>
        </Form.Item>
        <Form.Item className="alignButton">
          <Button type="primary" htmlType="submit">
            Enregistrer
          </Button>
        </Form.Item>
        <Form.Item className="alignButton">
          <Button type="primary" htmlType="submit">
            Enregistrer & envoyer
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default TestRequestForm;
