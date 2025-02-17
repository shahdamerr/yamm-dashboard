import { Button, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import Navbar from "./NavBar";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen">
      <Sider
        width={250}
        className="!bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-center"
      >
        <div className="text-3xl font-bold text-white mt-4 mb-10">Yamm</div>
        <Button
          onClick={() => navigate(`/`)}
          className="text-lg text-white flex !bg-grey-200 gap-2"
        >
          <HomeOutlined />
          Products
        </Button>
      </Sider>
      <Layout className="min-h-screen">
        <Header className="shadow-md !bg-white px-4">
          <Navbar />
        </Header>
        <Content className="m-4 p-4 rounded-lg  bg-white">
          <div className="overflow-x-auto min-h-[calc(100vh-8rem)]">
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
