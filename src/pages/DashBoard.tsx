import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Table from "../components/Table";

export default function Dashboard() {
  return (
    <Layout>
      <Sider
        style={{
          backgroundColor: "white",
        }}
      >
        <SideBar />
      </Sider>
      <Layout
        style={{
          backgroundColor: "white",
        }}
      >
        <Header
          style={{
            background: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Navbar />
        </Header>
        <Content>
          <Table />
        </Content>
      </Layout>
    </Layout>
  );
}
