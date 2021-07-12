import { Form, Input, Button, Space, Select, InputNumber,Tag,  Typography} from 'antd';
import { MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import { useState } from 'react';
import './style.css';

const { Title } = Typography;

function DemandeEssaiSerie (){
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const [count, setCount] = useState(1);
  const redStart = <em style={{color:'red'}}>* </em>;

  return (
     <>
     
    <Title className="titreEtapeDemande"level={4}>Serie</Title>
     <div className="titreformulaireSerie">
      <Tag className="titreSerie1"> #</Tag>
      <Tag className="titreSerie2">{redStart} Designation produit</Tag>
      <Tag className="titreSerie3">{redStart}Reference ARTS</Tag>
      <Tag className="titreSerie4">{redStart}Capacite nominale</Tag>
      <Tag className="titreSerie5">{redStart}NB produit</Tag>
      <Tag className="titreSerie6">Descriptif serie</Tag>
    </div>
    <br/>
    <Form className="DimensionFormulaireSerie" name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" layout="vertical">
      <Form.List  name="series">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex' }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'id']}
                  fieldKey={[fieldKey, 'id']}
                >
                     <p>{key}</p>
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
                <MinusCircleOutlined onClick={function(event){ remove(name); setCount(count -1);}} />
              </Space>
              
            ))}
            <Form.Item>
              <Button type="dashed" onClick={function(event){add(); setCount(count + 1);}}  block icon={<PlusOutlined />}>
                Ajouter une serie
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
} export default DemandeEssaiSerie;