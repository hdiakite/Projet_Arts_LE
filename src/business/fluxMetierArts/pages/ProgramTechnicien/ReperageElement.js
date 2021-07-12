import React from 'react';
import './../stylePage.css'
import {useState} from 'react';
import { Form, InputNumber, Select, Tag, Input, Space,Button} from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };



const reperageElement = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countSerie, setCountSerie] = useState(1); /*state qui gère les incrementations du bouton ajout dans serie*/
    const redStart = <em style={{color:'red'}}>* </em>; /*Ajout d'un * rouge sur les menus serie et etape essai*/

    return (
        <div>
            <Form {...layout} className="dimensionFormulaire" name="dynamic_form_nest_item"  layout="vertical">
                <Form.Item  className="label" name="TypeBanc" label="Type de banc" rules={[{ required: true }]}>
                    <Select>
                        <Select.Option value="typeBanc"> Sytel</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item  className="label" name="NuméroDeBanc" label="Numéro de banc" rules={[{ required: true }]}>
                   <Input/>
                </Form.Item>
                <Form.Item  className="label" name="clientFournisseur" label="Nombre d'élément " rules={[{ required: true }]}>
                    <InputNumber value="nbElementBanc" style={{width:180}}/>
                </Form.Item>
         
                <div className="titreformulaireSerie">
                    <Tag className="titre1"> #</Tag>
                    <Tag className="titre2">{redStart} Numéro élément</Tag>
                    <Tag className="titre3">{redStart}Voie</Tag>
                    <Tag className="titre4">{redStart}Action</Tag>
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
                                <p style={{width:15}}>{id}+1</p>
                            </Form.Item>
                            <Form.Item
                            {...restField}
                            name={[name, 'numeroElement']}
                            fieldKey={[fieldKey, 'numeroElement']}
                            rules={[{ required: true, message: '' }]}
                            >
                                <Input style={{width:190}}/>
                            </Form.Item>
                            <Form.Item
                            {...restField}
                            name={[name, 'voie']}
                            fieldKey={[fieldKey, 'voie']}
                            rules={[{ required: true }]}
                            >
                            <InputNumber style={{width:170}}/>
                            </Form.Item>
                            <Button type="link" ghost onClick={function(event){ remove(name); setCountSerie(countSerie -1);}} style={{width:180}}>Supprimer</Button>
                        </Space>
              
                    ))}
                    <Form.Item>
                        <Button style={{width:600}} type="dashed" onClick={function(event){add(); setCountSerie(countSerie + 1);}}  block icon={<PlusOutlined />}>
                            Ajouter une serie
                        </Button>
                    </Form.Item>
                </>
                )}
                </Form.List>
            </Form>  
        </div>
    );
}

export default reperageElement;
