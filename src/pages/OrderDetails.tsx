import { ColumnsType } from "antd/es/table";
import { useGetOrderByIdQuery } from "../store/apis/Orders";
import { Button, Layout, Spin } from "antd";
import OrderTable from "../components/OrderTable";
import { useNavigate, useParams } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { HomeOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import NavBar from "../components/NavBar";
import { stringify } from "querystring";

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Orderdetails() {
  const { id } = useParams();

  const navigate = useNavigate();
  console.log({ orderId: id });
  const { data: order, isLoading } = useGetOrderByIdQuery(id ?? "", {
    skip: !id,
  });

  const columns: ColumnsType<Item> = [
    {
      title: "Item Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      key: "total",
      render: (_, record) => `$${(record.price * record.quantity).toFixed(2)}`,
    },
  ];

  if (isLoading) return <Spin size="large" />;

  return (
    <div>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Layout className="min-h-screen ">
          <Sider
            width={250}
            className="!bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-center  "
          >
            <div className="text-3xl font-bold text-white  mt-4 mb-10">
              Yamm
            </div>
            <Button
              onClick={() => navigate(`/`)}
              className="text-lg  text-white flex  !bg-grey-200 gap-2"
            >
              <HomeOutlined />
              Products
            </Button>
          </Sider>
          <Layout className="min-h-screen ">
            <Header className="shadow-md !bg-white px-4">
              <NavBar />
            </Header>
            <Content className="m-4 p-4  rounded-lg shadow">
              <div className="overflow-x-auto min-h-[calc(100vh-8rem)]">
                <OrderTable<Item>
                  columns={columns}
                  data={order?.items || []}
                  loading={isLoading}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
    </div>
  );
}
