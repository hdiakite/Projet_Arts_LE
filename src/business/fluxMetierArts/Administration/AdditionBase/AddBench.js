import React, { useState } from 'react';
import '../../components/style.css';
import { Form, Input, Button, Typography, Space, Tag, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 30 },
  wrapperCol: { span: 30 },
};

const { Title } = Typography;
const { Option } = Select;

const AddBench = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };
  const [countBench, setCountBench] = useState(1);
  const redStart = <em style={{ color: 'red' }}>* </em>;
  return (
    <div>
      <Form
        {...layout}
        id="bench"
        className="formulaireDemande1"
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Title className="" level={4}>
          New Banc
        </Title>
        <div className="titreformulaireAjoutTechnologie">
          <Tag className="titreSerie1"> #</Tag>
          <Tag className="titrePriority1">{redStart} Nom</Tag>
          <Tag className="titrePriority1">{redStart} Nombre de voie</Tag>
          <Tag className="titrePriority1">Description</Tag>
          <Tag className="titrePriority1">{redStart}Type de banc</Tag>
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
                    <Input style={{ width: 230 }} placeholder="nom banc" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'nb_way']}
                    fieldKey={[fieldKey, 'nb_way']}
                  >
                    <Input
                      style={{ width: 240 }}
                      placeholder="nombre de voie"
                    />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    fieldKey={[fieldKey, 'description']}
                  >
                    <Input style={{ width: 230 }} placeholder="" />
                  </Form.Item>
                  <Form.Item name="TypeBench" rules={[{ required: true }]}>
                    <Select
                      style={{ width: 230 }}
                      placeholder="Select a option"
                      // onChange= {}
                      allowClear
                    >
                      {/* a modifier select automatique */}
                      <Option value="syte">SYTEL</Option>{' '}
                    </Select>
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={function (event) {
                      remove(name);
                      setCountBench(countBench - 1);
                    }}
                  />
                </Space>
              ))}
              <Form.Item>
                <Button
                  style={{ width: 990 }}
                  type="dashed"
                  onClick={function (event) {
                    add();
                    setCountBench(countBench + 1);
                  }}
                  icon={<PlusOutlined />}
                >
                  Ajouter
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button style={{ width: 990 }} type="primary">
          Enregistrer
        </Button>
      </Form>
    </div>
  );
};

export default AddBench;
