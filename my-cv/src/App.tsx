import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu, Avatar, Divider, theme } from "antd";
import About from "./page/About";

const { Content, Sider } = Layout;

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          // colorPrimary: "cyan",
        },
      }}
    >
      <Layout>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <About />
            </div>
          </Content>
        </Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          reverseArrow={true}
        >
          <div className="logo">
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              src={logo}
            />
          </div>
          <Divider />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `about ${index + 1}`,
            }))}
          />
        </Sider>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
