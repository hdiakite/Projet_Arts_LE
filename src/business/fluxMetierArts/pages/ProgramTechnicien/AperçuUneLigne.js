import React from 'react';
import {  Form, Input} from 'antd';
import './../stylePage.css'

const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };
  
const AperçuUneLigne = () => {
    return (
        <div>
              <hr style={{width:1500, marginLeft:10}}/>
            <Form {...layout} className="" name="dynamic_form_nest_item"  layout="vertical">
                <Form.Item  className="inputDonneMesure" >
                    <Input className="" value="" style={{borderColor:"white"}}/>
                </Form.Item>   
            
                <Form.Item  className="inputDonneMesure">
                    <Input className="" value="" style={{borderColor:"white"}}/>
                </Form.Item> 
                
                <Form.Item  className="inputDonneMesure">
                    <Input className="" value="" style={{borderColor:"white"}}/>
                </Form.Item> 
                
            </Form>
        </div>
    );
}

export default AperçuUneLigne;
