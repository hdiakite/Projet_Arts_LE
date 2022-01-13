import React, { useState } from 'react';
import '../../components/style.css';
import { Form, Input, Button, Typography, Space, Tag } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};

const { Title } = Typography;

const AddEssai = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  const [countEssai, setCountEssai] = useState(1);
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
          New essai
        </Title>
        <div className="titreformulaireAjoutTechnologie">
          <Tag className="titreSerie1"> #</Tag>
          <Tag className="titrePriority1">{redStart} Nom</Tag>
          <Tag className="titrePriority1">Durée prévisionelle</Tag>
          <Tag className="titrePriority1">Nombre de cycle</Tag>
          <Tag className="titrePriority1">Cycle de sortie</Tag>
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
                    style={{ marginLeft: 10 }}
                  >
                    <p style={{ width: 5 }}> {id + 1}</p>
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
                    <Input style={{ width: 230 }} placeholder="" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'Nb_Cylce']}
                    fieldKey={[fieldKey, 'Nb_Cylce']}
                  >
                    <Input style={{ width: 230 }} placeholder="" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'Cycle_Sortie']}
                    fieldKey={[fieldKey, 'Cycle_Sortie']}
                  >
                    <Input style={{ width: 230 }} placeholder="" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    fieldKey={[fieldKey, 'description']}
                  >
                    <Input.TextArea
                      style={{ width: 230, marginTop: 10 }}
                      showCount
                      maxLength={250}
                    />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={function (event) {
                      remove(name);
                      setCountEssai(countEssai - 1);
                    }}
                  />
                </Space>
              ))}
              <Form.Item>
                <Button
                  style={{ width: 1250 }}
                  type="dashed"
                  onClick={function (event) {
                    add();
                    setCountEssai(countEssai + 1);
                  }}
                  icon={<PlusOutlined />}
                >
                  Ajouter
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button style={{ width: 1250 }} type="primary">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
};

export default AddEssai;
