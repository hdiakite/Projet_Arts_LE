import React, { useState } from 'react';
import '../../components/style.css';
import { Form, Input, Button, Typography, Space, Tag } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};

const { Title } = Typography;

const AjoutPriorite = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  const [countSerie, setCountSerie] = useState(1);
  const redStart = <em style={{ color: 'red' }}>* </em>;

  return (
    <div>
      <Form
        {...layout}
        id="demande"
        className="formulaireDemande1"
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Title className="" level={4}>
          New priorité
        </Title>
        <div className="titreformulaireAjoutTechnologie">
          <Tag className="titreSerie1"> #</Tag>
          <Tag className="titrePriority1">{redStart} Nom</Tag>
          <Tag className="titrePriority1">
            {redStart} delai max de lancement
          </Tag>
          <Tag className="titrePriority1">Description</Tag>
        </div>
        <br />

        <Form.List name="priority">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }, id) => (
                <Space key={key} style={{ display: 'flex' }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'id']}
                    fieldKey={[fieldKey, 'id']}
                  >
                    <p>{id + 1}</p>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'nom']}
                    fieldKey={[fieldKey, 'nom']}
                    rules={[{ required: true, message: '' }]}
                  >
                    <Input style={{ width: 230 }} placeholder="nom type banc" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'delai']}
                    fieldKey={[fieldKey, 'delai']}
                  >
                    <Input style={{ width: 240 }} placeholder="" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    fieldKey={[fieldKey, 'description']}
                  >
                    <Input style={{ width: 240 }} placeholder="" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={function (event) {
                      remove(name);
                      setCountSerie(countSerie - 1);
                    }}
                  />
                </Space>
              ))}
              <Form.Item>
                <Button
                  style={{ width: 750 }}
                  type="dashed"
                  onClick={function (event) {
                    add();
                    setCountSerie(countSerie + 1);
                  }}
                  icon={<PlusOutlined />}
                >
                  Ajouter
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button style={{ width: 750 }} type="primary">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
};

export default AjoutPriorite;
