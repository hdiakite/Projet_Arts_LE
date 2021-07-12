import React from 'react';
import './../stylePage.css'
import moment from 'moment';
import SaisieUneLigneDeMesure from './SaisieUneLigneDeMesure';
import { Form, Typography, Input, Button,  DatePicker, Tag, Upload, message, Divider, Select} from 'antd';
import { UploadOutlined  } from '@ant-design/icons';

const { Title, Text } = Typography;
const dateFormat = 'YYYY/MM/DD';

const layout = {
    labelCol: { span: 30},
    wrapperCol: { span: 30 }
  };
/*------------------------------importer un fichier----------------------------- */
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  /*---------------------------------------------------------------------------------------------- */
function SaisieDonneeDeMesure (){

    return(
        <div>
            <Form {...layout} className="dimensionFormulaire" name="dynamic_form_nest_item"  layout="vertical">
                <Form.Item  className="" name="dateProgram" label="Date">
                    <DatePicker className="" defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                </Form.Item>
                <Form.Item  className="titreInfoMesure" name="typeMesure" label="Type de mesure">
                    <Select>
                        <Select.Option value="typeMesure"> Poids</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item  className="titreInfoMesure" name="cycle" label="Cycle " >
                    <Input className="" value="0" style={{width:180}}/>
                </Form.Item>   
                <Form.Item className="titreInfoMesure"> 
                    <Upload {...props}>
                <Button className="importFichier" icon={<UploadOutlined />}>Importer un fichier</Button>
                    </Upload>
                </Form.Item>
            </Form>
            <br/>
            <div className="titreformulaireMesure">
            <Text className="titreMesure"> Mesure</Text>
            <Text className="titreMesure2"> Numéro élément</Text>
            <Text className="titreMesure2">Voie</Text>
            <Text className="titreMesure2">Banc</Text>
            </div>
            <Divider />
            <SaisieUneLigneDeMesure/>
            <SaisieUneLigneDeMesure/>
            <SaisieUneLigneDeMesure/>
        </div>
    );
}
export default SaisieDonneeDeMesure;