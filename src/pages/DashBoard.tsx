import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import OrderTable from "../components/OrderTable";

export default function Dashboard() {
  return (
    <Layout className="bg-white">
      <Sider className="shadow-md">
        <SideBar />
      </Sider>
      <Layout className="flex flex-col w-full">
        <Header className="shadow-md">
          <Navbar />
        </Header>
        <Content className="m-4 p-4">
          <OrderTable />
        </Content>
      </Layout>
    </Layout>
  );
}
