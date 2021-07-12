import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: "Numéro d'essai",
    dataIndex: 'numeroDessai',
    key: 'numeroDessai',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Demandeur',
    dataIndex: 'demandeur',
    key: 'demandeur',
  },
  {
    title: 'Technicien',
    dataIndex: 'tchnicien',
    key: 'technicien',
  },
  {
    title: 'Designation',
    dataIndex: 'designation',
    key: 'designation',
  },
  {
    title: 'Numero de projet',
    dataIndex: 'numeroProjet',
    key: 'numeroProjet',
  },
  {
    title: 'Statut',
    key: 'statut',
    dataIndex: 'statut',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Copier</a>
      </Space>
    ),
  },
];

const data = [
  ];

function TableauStandard(){
    return(
        <div  className="dimensionTableau">
        <Table columns={columns} dataSource={data}/>
        </div>
    );
}
export default TableauStandard;