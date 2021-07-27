import React from 'react';
import './style.css';
import { Layout, Avatar, Image } from 'antd';

const { Header } = Layout;
function HeaderLogo() {
  return (
    <div>
      <Layout className="entete">
        <Header style={{ background: '#0d1754' }}>
          <Avatar
            className="icon"
            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
          >
            U
          </Avatar>
          <Image
            className="logo"
            width={90}
            height={55}
            src="http://ifnb-web:8080/docs/logo%20jpeg.jpg"
          />
        </Header>
      </Layout>
    </div>
  );
}
export default HeaderLogo;
