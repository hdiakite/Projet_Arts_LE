import React, { useState } from 'react';
import '../../components/style.css';
import { Form, Input, Button, Typography, Space, Tag } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};

const { Title } = Typography;

const AjoutTechnologie = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  const [countSerie, setCountSerie] = useState(1);
  const redStart = <em style={{ color: 'red' }}>* </em>;
  return (
    <div>
      <Form
        {...layout}
        class="CompsantADroite"
        id="demande"
        className="formulaireDemande1"
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Title className="" level={4}>
          Serie
        </Title>
        <div className="titreformulaireAjoutTechnologie">
          <Tag className="titreSerie1"> #</Tag>
          <Tag className="titreNom">{redStart} Nom</Tag>
          <Tag className="titreDescription">{redStart}Description</Tag>
        </div>
        <br />

        <Form.List name="series">
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
                    <Input
                      style={{ width: 320 }}
                      placeholder="nom technologie"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    fieldKey={[fieldKey, 'description']}
                  >
                    <Input style={{ width: 320 }} placeholder="" />
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
                  type="dashed"
                  onClick={function (event) {
                    add();
                    setCountSerie(countSerie + 1);
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  Ajouter
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button type="primary" block>
          Enregistrer
        </Button>
      </Form>
    </div>
  );
};

export default AjoutTechnologie;
