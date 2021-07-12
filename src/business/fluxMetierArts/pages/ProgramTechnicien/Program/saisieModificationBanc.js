import React from 'react';
import { Select, Form, Input} from 'antd';
import './../../stylePage.css'

const { Option } = Select;

const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };
  
const SaisieModificationBanc = () => {
    return (
        <div>
              <hr style={{width:2000, marginLeft:10}}/>
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
                
                <Form.Item  className="inputDonneMesure">
                    <Select className="" value="" style={{}}>
                        <Option></Option>
                    </Select>
                </Form.Item> 
              
            </Form>
        </div>
    );
}

export default SaisieModificationBanc;
