import React from 'react';
import { Divider, Form, Input} from 'antd';
import './../stylePage.css'

const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };
  
const SaisieUneLigneDeMesure = () => {
    return (
        <div>
            <Form {...layout} className="" name="dynamic_form_nest_item"  layout="vertical">
                
                <Form.Item  className="inputDonneMesure" >
                    <Input className="" value="" style={{}}/>
                </Form.Item>   
            
                <Form.Item  className="inputDonneMesure">
                    <Input className="" value="" style={{}}/>
                </Form.Item> 
                
                <Form.Item  className="inputDonneMesure">
                    <Input className="" value="" style={{}}/>
                </Form.Item> 
                
                <Form.Item  className="inputDonneMesure">
                    <Input className="" value="" style={{}}/>
                </Form.Item> 
                <hr style={{width:2000, marginLeft:10}}/>
            </Form>
        </div>
    );
}

export default SaisieUneLigneDeMesure;
