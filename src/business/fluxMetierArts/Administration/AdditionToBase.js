import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../components/style.css';
import { Menu, Button, PageHeader, Layout } from 'antd';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import AddTechnology from './AdditionBase/AddTechnology';
import AddCategorie from './AdditionBase/AddCategory';
import AddStatusEssai from './AdditionBase/AddStatusEssai';
import AddTypeBanc from './AdditionBase/AddTypeBanc';
import AddPriority from './AdditionBase/addPriority';
import AddEtuve from './AdditionBase/AddEtuve';
import AddEssai from './AdditionBase/AddEssai';
import AddUnit from './AdditionBase/AddUnit';
import AddBench from './AdditionBase/AddBench';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Accueil',
  },
  {
    path: 'AjoutBase',
    breadcrumbName: 'Ajout en base',
  },
];

const { Header, Footer, Sider, Content } = Layout;

const AdditionToBase = () => {
  const { path, url } = useRouteMatch();
  const [showComponents, setShowComponents] = useState(false);
  const onClick = () => setShowComponents(!showComponents);

  return (
    <>
      <div>
        <PageHeader
          className="site-page-header"
          title="Création"
          breadcrumb={{ routes }}
        />
      </div>
      <div>
        <Layout className="layoutAdministration">
          <Sider>
            <Menu
              className="menuAjoutEnBase"
              style={{ width: 200 }}
              mode="vertical"
              theme="light"
              defaultOpenKeys={['1']}
            >
              <Menu.Item key="1">
                <Link to={`${url}/technology`}>Technologie</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={`${url}/category`}>Catégorie</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={`${url}/statusEssai`}>Statut essai</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to={`${url}/typeBanc`}>Type de banc</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to={`${url}/etuve`}>Etuve</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to={`${url}/essai`}>Essai</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to={`${url}/unit`}>Unité</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to={`${url}/priority`}>Priorité</Link>
              </Menu.Item>
              <Menu.Item key="9">
                <Link to={`${url}/bench`}>Banc</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout class="layoutContent">
            <Content>
              <Switch>
                <Route path={`${path}/technology`}>
                  <AddTechnology />
                </Route>
                <Route path={`${path}/category`}>
                  <AddCategorie />
                </Route>
                <Route path={`${path}/statusEssai`}>
                  <AddStatusEssai />
                </Route>
                <Route path={`${path}/typeBanc`}>
                  <AddTypeBanc />
                </Route>
                <Route path={`${path}/priority`}>
                  <AddPriority />
                </Route>
                <Route path={`${path}/etuve`}>
                  <AddEtuve />
                </Route>
                <Route path={`${path}/essai`}>
                  <AddEssai />
                </Route>
                <Route path={`${path}/unit`}>
                  <AddUnit />
                </Route>
                <Route path={`${path}/bench`}>
                  <AddBench />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
};
export default AdditionToBase;
