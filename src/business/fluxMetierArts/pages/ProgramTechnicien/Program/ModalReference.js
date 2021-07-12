import React from 'react'
import './../../../components/style.css';
import { Input, Form, Select} from 'antd';


const { Option } = Select;

const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };

function FonctionModal (){

    return(
            <div >
                <br/>
                <Form {...layout} name="" >
                    <Form.Item name={['user', 'name']} label="Entrez le numero d'essai" rules={[{ required: true }]}>
                        <Input style={{width:300, marginLeft:40}} />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Entrez la reference DDE" rules={[{  required: true }]}>
                        <Input style={{width:300, marginLeft:40}} />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Entrez le numero de banc" rules={[{  required: true}]}>
                        <Input style={{width:300, marginLeft:40}}/>
                    </Form.Item> 
                </Form>
            </div>
    )
}
export default FonctionModal;
