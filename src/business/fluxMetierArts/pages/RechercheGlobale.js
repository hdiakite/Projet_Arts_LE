import React from 'react';
import { Form, Select, Table, Space, Tag, Divider, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CheminRechercheGlobale from '../components/CheminRechercheGlobale';
import '../components/style.css';

const { Option } = Select;
const { Column } = Table;

const data = [];

function RechercheGlobale() {
  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <div>
      <>
        <CheminRechercheGlobale />
        {/* ------------------Formulaire recherche --------------------------------------------*/}
        <div className="dimansionRechercheGlobale">
          <Form
            className="dimensionFormulaire"
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              className="labelInputRecherche "
              name="filtre"
              label="Filtrer par"
            >
              <Select placeholder="Select " style={{ width: 200 }}>
                <Option value="">filtre</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="labelInputRecherche"
              name="recherche"
              label="Recherche"
            >
              <Select placeholder="Select " style={{ width: 200 }}>
                <Option value="">recherche</Option>
              </Select>
            </Form.Item>
            <Form.Item className="buttontRecherche" name="recherche">
              <Button
                style={{ width: 150 }}
                type="primary"
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Form.Item>
          </Form>
          {/* -----------------------------------------------------Tableau resultat recherche------------------------------------------------------*/}
          <Divider orientation="left" style={{ opacity: 0.23 }}>
            Resultat de la recherche
          </Divider>
          <Table dataSource={data}>
            <Column
              title="Numero d'essai"
              dataIndex="numeroEssai"
              key="numeroEssai"
            />
            <Column title="Demandeur" dataIndex="demandeur" key="demandeur" />
            <Column title="Date demande d'essai" dataIndex="date" key="date" />
            <Column title="Priorité" dataIndex="priorite" key="priorite" />
            <Column
              title="Statut"
              dataIndex="statut"
              key="statut"
              render={(statut) => (
                <>
                  {statut.map((statutItem) => (
                    <Tag color="blue" key={statutItem}>
                      {statutItem}
                    </Tag>
                  ))}
                </>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => <Space size="middle"></Space>}
            />
          </Table>
          ,
        </div>
      </>
    </div>
  );
}
export default RechercheGlobale;
