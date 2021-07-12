import React from 'react';
import '../../components/style.css';
import { Form, Input, Button, DatePicker, Select, InputNumber, Upload, Typography, Space ,Tag} from 'antd';
import { UploadOutlined,  MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { useState } from 'react';

const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };

  const { Title } = Typography;

  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };

  
function Formulaire1DemandeVierge() {

    const onFinish = values => {
        console.log('Received values of form:', values);
      };
    
      const [countSerie, setCountSerie] = useState(1); /*state qui gère les incrementations du bouton ajout dans serie*/
      const [countEssai, setCountEssai] = useState(1); /*state qui gère les incrementations du bouton ajout dans essai*/
      const redStart = <em style={{color:'red'}}>* </em>; /*Ajout d'un * rouge sur les menus serie et etape essai*/

    return (
        <>
              {/* ------------------------------Information generale------------------------------------------------------------------*/}
        <Title className="titreEtapeDemande"level={4}>Détail essai numéro </Title>
        <Form {...layout} className="dimensionFormulaireValiderEssai" name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" layout="vertical">
            <Form.Item className="labelTextArea" value="" name={[ 'OjetEssai']} label="Objet de l'essai">
                <Input.TextArea  showCount maxLength={100}/>
            </Form.Item>
            <Form.Item  className="label1" name="demandeur" label="Demandeur" rules={[{ required: true }]}>
                <Input placeholder="demandeur"/>
            </Form.Item>
            <Form.Item  className="label1" name="dateDemande" label="Date de la demande" rules={[{ required: true }]}>
                <DatePicker style={{ width:200}}/>
            </Form.Item>
            <Form.Item  className="label1" name="priorite" label="Priorité" rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="prioriete"> priorite </Select.Option>
                </Select>
            </Form.Item>
            <Form.Item  className="label1" name="dateMaxLancement" label="Date max de lancement">
                <DatePicker style={{ width:200}}/>
            </Form.Item>
            <Form.Item  className="label1" name="technologie" label="Technologie" rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="technologie"> Li-ion</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item  className="label1" name="produit" label="Produit" rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="produit"> produit</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item  className="label1" name="clientFournisseur" label="Client/Fournisseur" rules={[{ required: true }]}>
                <Select>
                    <Select.Option value="ClientFounisseur"> Arts-Energy</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item  className="label1" name="numeroProjet" label="Numero de projet" rules={[{ required: true }]}>
                <Input placeholder="1234"/>
            </Form.Item>
               
            <Form.Item  className="labelTextArea" value="" name={['descriptionEssai']} label="Description">
                <Input.TextArea  showCount maxLength={100} />
            </Form.Item>
            <Form.Item className="update">
                <Upload {...props}>
                     <Button icon={<UploadOutlined />}>Fichier de spécification</Button>
                </Upload>
            </Form.Item>
            
        {/* ------------------------------Etape serie------------------------------------------------------------------*/}
        <Title className=""level={4}>Serie</Title>
     <div className="titreformulaireSerie">
      <Tag className="titreSerie1"> #</Tag>
      <Tag className="titreSerie2">{redStart} Designation produit</Tag>
      <Tag className="titreSerie3">{redStart}Reference ARTS</Tag>
      <Tag className="titreSerie4">{redStart}Capacite nominale</Tag>
      <Tag className="titreSerie5">{redStart}NB produit</Tag>
      <Tag className="titreSerie6">Descriptif serie</Tag>
    </div>
    <br/>
    
    <Form.List  name="series">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }, id) => (
              <Space key={key} style={{ display: 'flex' }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'id']}
                  fieldKey={[fieldKey, 'id']}
                >
                    <p>{id +1}</p>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'designationProduit']}
                  fieldKey={[fieldKey, 'designationProduit']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                     <Select style={{ width:150}} >
                        <Select.Option  value="designationProduit">VHTC </Select.Option>
                    </Select >
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'referenceArts']}
                  fieldKey={[fieldKey, 'referenceArts']}
                  rules={[{ required: true }]}
                >
                 <Select style={{ width:150}}>
                        <Select.Option value="referenceArts">1234 </Select.Option>
                    </Select >
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'capaciteNominale']}
                  fieldKey={[fieldKey, 'capaciteNominale']}
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width:150}} placeholder="10.0" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'nbProduit']}
                  fieldKey={[fieldKey, 'nbProduit']}
                  rules={[{ required: true}]}
                >
                  <InputNumber style={{ width:150}} placeholder="3" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'descriptionSerie']}
                  fieldKey={[fieldKey, 'descriptionSerie']}
                >
                  <Input style={{ width:330}} placeholder="Descriptif serie" />
                </Form.Item>
                <MinusCircleOutlined onClick={function(event){ remove(name); setCountSerie(countSerie -1);}} />
              </Space>
              
            ))}
            <Form.Item>
              <Button type="dashed" onClick={function(event){add(); setCountSerie(countSerie + 1);}}  block icon={<PlusOutlined />}>
                Ajouter une serie
              </Button>
            </Form.Item>
          </>
        )}
    </Form.List>

     {/* ------------------------------Etape Essais------------------------------------------------------------------*/}
     <Title className=""level={4}>Essai</Title>
     <div className="titreformulaireSerie">
      <Tag className="titreEssai1"> #</Tag>
      <Tag className="titreEssai2">{redStart} Type essai</Tag>
      <Tag className="titreEssai3">{redStart}Durée estimée</Tag>
      <Tag className="titreEssai4">{redStart}Sanctions/ Commentaire</Tag>
      <Tag className="titreEssai5">{redStart}Document attaché</Tag>
    </div>
    <br/>
    
      <Form.List  name="essai">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }, id) => (
              <Space key={key} style={{ display: 'flex' }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'id']}
                  fieldKey={[fieldKey, 'id']}
                >
                     <p>{id +1}</p>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'typeEssai']}
                  fieldKey={[fieldKey, 'TypeEssai']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                     <Select style={{ width:200}} >
                        <Select.Option  value="TypeEssai">Residuelle </Select.Option>
                    </Select >
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'dureeEssai']}
                  fieldKey={[fieldKey, 'dureeEssai']}
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width:150}} placeholder="10.0" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'sanctionsComentaire']}
                  fieldKey={[fieldKey, 'sanctionsComentaire']}
                  rules={[{ required: true }]}
                >
                    <input style={{ width:380}} placeholder="10.0"/>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'documentAttache']}
                  fieldKey={[fieldKey, 'documentAttache']}
                  rules={[{ required: true}]}
                >
                  <Input style={{ width:200}} placeholder="3" />
                </Form.Item>
                <MinusCircleOutlined onClick={function(event){ remove(name); setCountEssai(countEssai -1);}} />
              </Space>
              
            ))}
            <Form.Item>
              <Button type="dashed" onClick={function(event){add(); setCountEssai(countEssai + 1);}}  block icon={<PlusOutlined />}>
                Ajouter un essai
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item {...layout}>
                <Button  htmlType="submit">Enregistrer</Button>
            </Form.Item>
    </Form>
        </>
    );
}
export default Formulaire1DemandeVierge;