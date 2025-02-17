import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Navbar from "../components/NavBar";
import OrderTable from "../components/OrderTable";
import { HomeOutlined } from "@ant-design/icons";

export default function Dashboard() {
  return (
    <Layout className="min-h-screen ">
      <Sider
        width={250}
        className="!bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600  "
      >
        <div className="text-3xl font-bold text-white text-center mt-4 mb-10">
          Yamm
        </div>
        <div className="text-lg  text-white flex  gap-2">
          <HomeOutlined />
          Products
        </div>
      </Sider>
      <Layout className="min-h-screen ">
        <Header className="shadow-md !bg-white px-4">
          <Navbar />
        </Header>
        <Content className="m-4 p-4  rounded-lg shadow">
          <div className="overflow-x-auto min-h-[calc(100vh-8rem)]">
            <OrderTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
