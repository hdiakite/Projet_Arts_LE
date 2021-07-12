import React from 'react';
import '../components/style.css'
import { Form, Input, Button, Checkbox, Image, Divider } from 'antd';
import AppCopieDemandeur from'./../../../AppCopieDemandeur';


function Connexion () {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
        <div className="arriereImage">
            <div className="dimensionConnexion">
                <Image className="" width={150} height={100} src="http://ifnb-web:8080/docs/logo%20jpeg.jpg"/>
                <Form className="formulaireConnexion"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                    <Form.Item style={{marginLeft:50}}className="labelConnexion"
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                    <Input  style={{width:250}} />
                    </Form.Item>
                    <Form.Item  style={{marginLeft:50}} className="labelConnexion"
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                    <Input.Password  style={{width:250}}/>
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>se souvenir de moi</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <a href={AppCopieDemandeur} type="Button"  shape="round" style={{width:200, background:"#253077", color:"white"}}>
                            Connexion 
                        </a>
                    </Form.Item>
                </Form>
            </div>
        </div>
  );
}
export default Connexion;

