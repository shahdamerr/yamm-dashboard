import { Button, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import OrderTable from "../components/OrderTable";

export default function Dashboard() {
  return (
    <Layout className="min-h-screen ">
      <Sider width={250} className="shadow-md">
        <SideBar />
      </Sider>
      <Layout>
        <Header className="shadow-md  px-4" style={{ background: "white" }}>
          <Navbar />
        </Header>
        <Content className="m-4 p-4  rounded-lg shadow">
          <div className="overflow-x-auto">
            <OrderTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
